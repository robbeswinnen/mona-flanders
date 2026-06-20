import { Car, Check, Info } from 'lucide-react'

const AMOUNT = 750

export default function ElectricCarCard({ active, onToggle }) {
  return (
    <div
      className={`glass-card product-card p-6 flex flex-col gap-5 cursor-pointer select-none transition-all duration-300 ${
        active ? 'product-card-active' : ''
      }`}
      onClick={onToggle}
      id="product-electric-car"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl"
              style={{ background: 'linear-gradient(135deg, rgba(173,255,0,0.2), rgba(52,211,153,0.2))' }}
            >
              <Car size={18} className="text-mona-neon" />
            </span>
            <span className="badge text-[10px]">Pilaar 1</span>
          </div>
          <h3 className="font-serif text-xl text-white leading-tight">
            Elektrische SUV-Lease
          </h3>
          <p className="text-white/50 text-sm mt-1">Premium elektrisch rijden, volledig ontzorgd</p>
        </div>

        {/* Toggle indicator */}
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            active
              ? 'bg-mona-neon border-mona-neon'
              : 'border-white/20 bg-transparent'
          }`}
        >
          {active && <Check size={13} className="text-mona-dark stroke-[3]" />}
        </div>
      </div>

      {/* Amount display */}
      <div
        className="rounded-xl px-4 py-3 flex items-center justify-between"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span className="text-white/50 text-sm">Vaste maandkost</span>
        <span className="font-bold text-2xl text-white">
          €{AMOUNT}
          <span className="text-white/40 text-sm font-normal">/mnd</span>
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {['Audi Q4 e-tron of gelijkwaardig', 'Laadpas inbegrepen', 'Verzekering & onderhoud', 'CO₂-neutraal rijden'].map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-xs text-white/60">
            <Check size={12} className="text-mona-neon flex-shrink-0" />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
          active
            ? 'bg-mona-neon text-mona-dark'
            : 'bg-white/8 text-white/70 hover:bg-white/12'
        }`}
        onClick={(e) => { e.stopPropagation(); onToggle() }}
      >
        {active ? '✓ Geselecteerd' : 'Selecteer deze optie'}
      </button>
    </div>
  )
}
