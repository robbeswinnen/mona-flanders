const stats = [
  {
    value: '€1.200',
    label: 'Gemiddeld maandbudget',
    sub: 'Op basis van TCO bedrijfswagen',
  },
  {
    value: '64%',
    label: 'CO₂-reductie',
    sub: 'Versus traditionele bedrijfswagen',
  },
  {
    value: '38%',
    label: 'Meer netto-loon',
    sub: 'Dankzij belastingvrije uitkering',
  },
  {
    value: '< 5 min',
    label: 'Setup tijd',
    sub: 'Van aanvraag tot actief budget',
  },
]

export default function StatsSection() {
  return (
    <section
      className="relative z-10 pb-0"
      style={{ background: '#1c3028' }}
      aria-label="Statistieken"
    >
      {/* 4-column stats grid that overlaps into the light section below */}
      <div className="container-mona">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-white/10 rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {stats.map(({ value, label, sub }, i) => (
            <div
              key={label}
              className={`p-8 lg:p-10 flex flex-col gap-3 group transition-colors duration-300 hover:bg-white/5 ${
                i < 3 ? 'border-r border-white/10' : ''
              }`}
            >
              {/* Giant number — Lamoon style */}
              <div className="font-serif text-5xl lg:text-6xl text-white leading-none tracking-tight">
                {value}
              </div>
              <div>
                <div className="text-white/80 text-sm font-medium mb-1">{label}</div>
                <div className="text-white/35 text-xs leading-relaxed">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link — Lamoon's "Let's build your next chapter" */}
        <div className="flex justify-end py-6">
          <a
            href="/marktplaats"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{ background: '#adff00', color: '#1c3028' }}
          >
            Bereken je voordeel
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
