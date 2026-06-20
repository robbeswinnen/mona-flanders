import { Home, Sparkles, ArrowRight } from 'lucide-react'

export default function WoonBonus({ amount }) {
  if (amount <= 0) return null

  return (
    <div
      id="woon-bonus"
      className="relative rounded-2xl p-5 lg:p-7 overflow-hidden woon-bonus-glow transition-all duration-700"
      style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(56,189,248,0.08) 50%, rgba(99,102,241,0.08) 100%)',
        border: '1px solid rgba(52,211,153,0.2)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Subtle background glow blob */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-5">
        {/* Icon */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(52,211,153,0.2), rgba(56,189,248,0.15))',
            border: '1px solid rgba(52,211,153,0.25)',
          }}
        >
          <Home size={24} className="text-emerald-400" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-serif text-lg text-white">Woon-Bonus geactiveerd</h4>
            <Sparkles size={14} className="text-emerald-400" />
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Je resterende budget van{' '}
            <strong className="text-emerald-400 font-semibold">€{amount.toFixed(0)}/mnd</strong>{' '}
            wordt automatisch en <span className="text-white/80">volledig belastingvrij</span> toegewezen 
            aan je huur of hypotheekaflossing. Vlaamse wetgeving geïntegreerd — geen actie vereist.
          </p>
        </div>

        {/* Amount badge */}
        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          <span className="text-xs text-white/40 uppercase tracking-wider">Woon-Bonus</span>
          <div
            className="px-4 py-2 rounded-xl text-center"
            style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.25)' }}
          >
            <span className="font-bold text-2xl text-emerald-400">€{amount.toFixed(0)}</span>
            <span className="text-emerald-400/60 text-sm">/mnd</span>
          </div>
          <span className="text-[10px] text-white/30">100% belastingvrij</span>
        </div>
      </div>

      {/* Disclaimer link */}
      <div className="mt-4 pt-4 border-t border-white/6">
        <a
          href="/hoe-het-werkt#woon-bonus"
          className="flex items-center gap-1.5 text-xs text-white/35 hover:text-emerald-400 transition-colors"
        >
          <ArrowRight size={11} />
          Meer over de Woon-Bonus wetgeving (art. 8ter Mobiliteitsbudgetwet)
        </a>
      </div>
    </div>
  )
}
