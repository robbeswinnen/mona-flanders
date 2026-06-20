import { Bike, Check } from 'lucide-react'

const MIN = 30
const MAX = 250
const DEFAULT = 80

export default function BikeCard({ active, onToggle, amount, onAmountChange }) {
  const pct = ((amount - MIN) / (MAX - MIN)) * 100

  return (
    <div
      className={`glass-card product-card p-6 flex flex-col gap-5 cursor-pointer select-none transition-all duration-300 ${
        active ? 'product-card-active' : ''
      }`}
      onClick={onToggle}
      id="product-bike"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl"
              style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(99,102,241,0.2))' }}
            >
              <Bike size={18} className="text-sky-400" />
            </span>
            <span className="badge text-[10px]">Pilaar 2</span>
          </div>
          <h3 className="font-serif text-xl text-white leading-tight">
            Speed Pedelec-Lease
          </h3>
          <p className="text-white/50 text-sm mt-1">Flexibele snelle e-bike voor dagelijks woon-werkverkeer</p>
        </div>

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
        <span className="text-white/50 text-sm">Jouw bijdrage</span>
        <span className="font-bold text-2xl text-white">
          €{amount}
          <span className="text-white/40 text-sm font-normal">/mnd</span>
        </span>
      </div>

      {/* Slider */}
      <div
        className="px-4 py-4 rounded-xl flex flex-col gap-3"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between text-xs text-white/40">
          <span>€{MIN}</span>
          <span className="text-white/60 font-medium">Stel in met de slider</span>
          <span>€{MAX}</span>
        </div>
        <div className="relative">
          <input
            id="bike-slider"
            type="range"
            min={MIN}
            max={MAX}
            step={5}
            value={amount}
            onChange={(e) => {
              onAmountChange(Number(e.target.value))
              if (!active) onToggle()
            }}
            style={{
              background: `linear-gradient(to right, #adff00 ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-white/30">
          <span>Instapmodel</span>
          <span>Topmodel</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {['Cowboy 4 of Specialized Turbo', 'Helm & accessoires inbegrepen', 'Onderhoud & herstelling', 'ANPR-erkende speed pedelec'].map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-xs text-white/60">
            <Check size={12} className="text-sky-400 flex-shrink-0" />
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
