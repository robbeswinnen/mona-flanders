const steps = [
  {
    num: '01',
    title: 'Aanvraag Budget',
    body: 'Je werkgever berekent de TCO van je bedrijfswagen en activeert jouw persoonlijke MONA-budget.',
  },
  {
    num: '02',
    title: 'Mobiliteit Kiezen',
    body: 'Kies in de marktplaats uit een e-auto lease, speed pedelec, treinpas of mix alles flexibel.',
  },
  {
    num: '03',
    title: 'Activeer Woonkosten',
    body: 'Geef aan of je nabij kantoor woont of minstens 50% thuiswerkt om Pilaar 3 belastingvrij te openen.',
  },
  {
    num: '04',
    title: 'Beheren & Scannen',
    body: 'Scan bonnetjes in of betaal rechtstreeks met de MONA mobiliteitskaart — uitgaven worden live verwerkt.',
  },
  {
    num: '05',
    title: 'Netto Uitbetaling',
    body: 'Ongebruikt budget wordt aan het eind van het jaar automatisch netto uitbetaald op je loonbrief.',
  },
]

export default function HowSection() {
  return (
    <section className="section-dark border-t border-white/5 text-white" id="hoe-het-werkt">
      <div className="container-mona">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-6">
            <span className="badge-dark mb-4">Het Proces</span>
            <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight">
              EENVOUDIG INGESTELED IN 5 LOGISCHE STAPPEN
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-white/60 text-base leading-relaxed">
              Geen ingewikkelde wetgeving of formulieren. Met MONA doorloopt de werknemer een helder traject van aanvraag tot directe uitbetaling. Wij regelen de volledige fiscale verwerking op de achtergrond.
            </p>
          </div>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 relative">
          {steps.map(({ num, title, body }, idx) => (
            <div key={title} className="relative flex flex-col items-start group">
              
              {/* Step number and connection line */}
              <div className="w-full flex items-center justify-between mb-6 relative">
                <span className="font-fragment-mono text-4xl text-[#fc4c01] font-bold">
                  {num}
                </span>
                
                {/* Horizontal line connector (only for large screens, hidden on last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-14 right-[-24px] top-1/2 h-0.5 border-t border-dashed border-white/10" />
                )}
              </div>

              {/* Title */}
              <h3 className="font-big-shoulders text-xl font-bold uppercase tracking-wider text-white mb-3">
                {title}
              </h3>

              {/* Body */}
              <p className="text-white/50 text-sm leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA link block */}
        <div className="mt-16 border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-fragment-mono text-xs text-white/40 uppercase tracking-widest">
            KLAAR OM JE MOBILITEIT IN EIGEN HANDEN TE NEMEN?
          </span>
          <a href="/marktplaats" className="btn-orange text-xs py-3 px-8">
            Start nu gratis
          </a>
        </div>

      </div>
    </section>
  )
}
