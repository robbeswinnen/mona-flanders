const stats = [
  {
    value: '€1.200/m',
    label: 'Gemiddeld Budget',
    sub: 'Vertaald uit de Total Cost of Ownership (TCO) van je ingeleverde bedrijfswagen.',
  },
  {
    value: '64%',
    label: 'CO₂-Reductie',
    sub: 'Dankzij de overstap naar duurzame elektrische auto\'s, treinen en speed pedelecs.',
  },
  {
    value: '+38%',
    label: 'Meer Netto-Loon',
    sub: 'Optimaal belastingvoordeel door budget uit te keren in pilaren 2 en 3.',
  },
  {
    value: '< 5 min',
    label: 'Setup Tijd',
    sub: 'Snelle onboarding van werknemers en werkgevers via ons digitaal dashboard.',
  },
  {
    value: '100%',
    label: 'Belastingvrij',
    sub: 'Volledig goedgekeurd door de federale Belgische wetgeving en RSZ.',
  },
  {
    value: '2.400+',
    label: 'Actieve Gebruikers',
    sub: 'Professionals in Vlaanderen die dagelijks hun mobiliteitsbudget beheren.',
  },
]

export default function StatsSection() {
  return (
    <section className="section-white border-t border-[#e8e8e8]" aria-label="Statistieken">
      <div className="container-mona">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="pill-label mb-4">Systeem Statistieken</span>
            <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-6xl text-[#14151a] leading-none tracking-tight">
              SLIMMER MOBILITEITSBEHEER MET BEWEZEN VOORDELEN
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-[#606060] text-base leading-relaxed">
              Het Belgische mobiliteitsbudget biedt ongeëvenaarde fiscale kansen. MONA digitaliseert de volledige administratie, waardoor de overgang voor zowel HR-teams als werknemers naadloos verloopt. Geen handmatige berekeningen, wel 100% fiscaal voordeel.
            </p>
          </div>
        </div>

        {/* 6-Grid Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8] border border-[#e8e8e8]">
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="bg-white p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-[#fbfbfb]"
            >
              <div>
                {/* Monospace Metric in orange */}
                <div className="font-fragment-mono text-4xl lg:text-5xl text-[#fc4c01] font-bold tracking-tight mb-4">
                  {value}
                </div>
                
                {/* Header in Big Shoulders */}
                <h3 className="font-big-shoulders text-xl font-extrabold text-[#14151a] tracking-wider uppercase mb-2">
                  {label}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[#606060] text-sm leading-relaxed mt-2">
                {sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
