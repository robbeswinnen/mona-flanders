import { useEffect, useRef } from 'react'

const TOTAL_BUDGET = 1200

// Ring radii for the two tracks
const R1 = 80   // outer ring  (total used)
const R2 = 65   // inner ring  (specific product)

function getCircumference(r) {
  return 2 * Math.PI * r
}

export default function BudgetRing({ spent, bikeAmount, hasElectric, hasTrain }) {
  const remaining = Math.max(0, TOTAL_BUDGET - spent)
  const pctUsed = Math.min(spent / TOTAL_BUDGET, 1)
  const pctRemaining = remaining / TOTAL_BUDGET

  const c1 = getCircumference(R1)
  const c2 = getCircumference(R2)

  // Outer ring shows % spent (green → teal gradient)
  const outerOffset = c1 - pctUsed * c1
  // Inner ring shows % remaining (blue gradient)
  const innerOffset = c2 - pctRemaining * c2

  const prevSpent = useRef(spent)

  const isOverBudget = spent > TOTAL_BUDGET
  const overAmount = Math.max(0, spent - TOTAL_BUDGET)

  return (
    <div className="flex flex-col items-center gap-6">
      {/* SVG Ring */}
      <div className="relative select-none" style={{ width: 220, height: 220 }}>
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          className="rotate-[-90deg]"
          aria-label={`Budget gebruikt: €${spent} van €${TOTAL_BUDGET}`}
        >
          <defs>
            <linearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#adff00" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <filter id="glow-outer">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-inner">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer track background */}
          <circle
            cx="110" cy="110" r={R1}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Outer track fill */}
          <circle
            cx="110" cy="110" r={R1}
            fill="none"
            stroke={isOverBudget ? '#ef4444' : 'url(#outerGrad)'}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={c1}
            strokeDashoffset={outerOffset}
            style={{
              transition: 'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1), stroke 0.4s ease',
              filter: isOverBudget ? 'drop-shadow(0 0 6px rgba(239,68,68,0.7))' : 'url(#glow-outer)',
            }}
          />

          {/* Inner track background */}
          <circle
            cx="110" cy="110" r={R2}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Inner track fill */}
          <circle
            cx="110" cy="110" r={R2}
            fill="none"
            stroke="url(#innerGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={c2}
            strokeDashoffset={innerOffset}
            style={{
              transition: 'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1)',
              filter: 'url(#glow-inner)',
            }}
          />
        </svg>

        {/* Center text — rotated back to normal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-1">
            Resterend
          </span>
          <span
            className={`font-sans font-bold leading-none transition-all duration-500 ${
              isOverBudget ? 'text-red-400 text-3xl' : 'text-mona-neon text-4xl'
            }`}
          >
            {isOverBudget ? '-' : ''}€{isOverBudget ? overAmount.toFixed(0) : remaining.toFixed(0)}
          </span>
          <span className="text-[11px] text-white/40 mt-1.5">
            van €{TOTAL_BUDGET}/mnd
          </span>
          {isOverBudget && (
            <span className="text-[10px] text-red-400 mt-1 font-medium">Budget overschreden</span>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 text-xs text-white/50">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(135deg,#adff00,#34d399)' }} />
          Gebruikt €{spent}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(135deg,#38bdf8,#6366f1)' }} />
          Vrij €{remaining}
        </div>
      </div>
    </div>
  )
}
