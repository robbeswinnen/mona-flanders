import { Train, Check } from 'lucide-react'

const AMOUNT = 50

export default function TrainCard({ active, onToggle }) {
  return (
    <div
      className={`glass-card product-card p-6 flex flex-col gap-5 cursor-pointer select-none transition-all duration-300 ${
        active ? 'product-card-active' : ''
      }`}
      onClick={onToggle}
      id="product-train"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl"
              style={{ background: 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(249,115,22,0.2))' }}
            >
              <Train size={18} className="text-amber-400" />
            </span>
            <span className="badge text-[10px]">Pilaar 2</span>
          </div>
          <h3 className="font-serif text-xl text-white leading-tight">
            NMBS Jaarabonnement
          </h3>
          <p className="text-white/50 text-sm mt-1">Onbeperkt treinreizen in heel België, heel het jaar</p>
        </div>

        {/* Toggle switch */}
        <div
          className="flex-shrink-0 mt-1"
          onClick={(e) => { e.stopPropagation(); onToggle() }}
        >
          <label className="relative inline-flex items-center cursor-pointer" id="train-toggle-label">
            <input
              id="train-toggle"
              type="checkbox"
              className="sr-only toggle-input"
              checked={active}
              onChange={onToggle}
            />
            <div
              className={`relative w-12 h-6 rounded-full transition-all duration-300 toggle-bg ${
                active
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                  : 'bg-white/15'
              }`}
              style={{
                boxShadow: active ? '0 0 15px rgba(16,185,129,0.4)' : 'none'
              }}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md toggle-dot transition-transform duration-300 ${
                  active ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Amount display */}
      <div
        className="rounded-xl px-4 py-3 flex items-center justify-between"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span className="text-white/50 text-sm">Omgerekende maandkost</span>
        <span className="font-bold text-2xl text-white">
          €{AMOUNT}
          <span className="text-white/40 text-sm font-normal">/mnd</span>
        </span>
      </div>

      {/* Info block */}
      <div
        className="rounded-xl p-3 flex items-start gap-2"
        style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.15)' }}
      >
        <span className="text-amber-400 text-xs mt-0.5">ℹ</span>
        <p className="text-xs text-amber-200/70 leading-relaxed">
          Jaarabonnement (€600/jaar) wordt maandelijks verrekend als €50/mnd vanuit je mobiliteitsbudget.
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {['Onbeperkt binnenlands treinverkeer', 'Inclusief IC, L en P-treinen', 'NMBS app & chipcard', 'Automatische verlenging'].map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-xs text-white/60">
            <Check size={12} className="text-amber-400 flex-shrink-0" />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
          active
            ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white'
            : 'bg-white/8 text-white/70 hover:bg-white/12'
        }`}
        onClick={(e) => { e.stopPropagation(); onToggle() }}
      >
        {active ? '✓ Geactiveerd' : 'Activeer abonnement'}
      </button>
    </div>
  )
}
