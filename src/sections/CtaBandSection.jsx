import { useState } from 'react'
import { ArrowRight, Zap, Bike, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const tabs = [
  {
    id: 'p1',
    label: 'Elektrische wagen',
    icon: Zap,
    heading: 'Rij duurzaam op Pilaar 1',
    body: 'Kies een elektrische wagen en financier deze volledig via je mobiliteitsbudget. Geen eigen inbreng — de TCO van je huidige bedrijfswagen dekt de kosten.',
    bullets: [
      'Breed aanbod van elektrische modellen',
      'Lease, verzekering & onderhoud inbegrepen',
      'Lagere ecologische voetafdruk',
    ],
  },
  {
    id: 'p2',
    label: 'Duurzaam transport',
    icon: Bike,
    heading: 'Combineer vrij op Pilaar 2',
    body: 'Besteed het resterende budget aan een speed pedelec, treinabonnement of deelwagen. Volledig vrijgesteld van belastingen en sociale bijdragen.',
    bullets: [
      'Speed pedelec, trein, deelwagen',
      '100% belastingvrij genoten',
      'Maandelijks aanpasbaar via het platform',
    ],
  },
  {
    id: 'p3',
    label: 'Woon-Bonus',
    icon: Home,
    heading: 'Woon belastingvrij via Pilaar 3',
    body: 'Resterend budget gaat automatisch naar huur of hypotheek — zolang je op minder dan 10 km van je werkplek woont of minstens 50% thuiswerkt.',
    bullets: [
      'Huur of hypotheek volledig belastingvrij',
      'Automatisch verrekend, geen administratie',
      'Ideaal voor hybride en thuiswerkers',
    ],
  },
]

export default function CtaBandSection() {
  const [active, setActive] = useState('p1')
  const current = tabs.find((t) => t.id === active)

  return (
    <section aria-label="Ontdek je voordelen" id="voordelen">
      {/* ── Dark full-bleed photo band ── */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '480px' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/cta-band.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(19, 35, 30, 0.72)' }}
        />

        {/* Content */}
        <div className="container-mona relative z-10 py-20 lg:py-28">
          <span
            className="inline-flex mb-6 px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.70)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Ontdek de juiste oplossing
          </span>
          <h2 className="font-serif text-5xl lg:text-7xl text-white leading-[1.0] max-w-3xl mb-6">
            Elke werknemer verdient
            een budget op maat.
          </h2>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            MONA vertaalt het Belgische mobiliteitsbudget naar een persoonlijk,
            flexibel pakket — volledig belastingvrij en in minder dan 5 minuten.
          </p>
        </div>
      </div>

      {/* ── Tabbed service panel — light card on dark → light transition ── */}
      <div style={{ background: '#f0f0eb' }}>
        <div className="container-mona">
          {/* Tab panel card — overlaps photo above */}
          <div
            className="relative -mt-16 rounded-2xl overflow-hidden bg-white border border-black/8"
            style={{ boxShadow: '0 8px 60px rgba(0,0,0,0.12)' }}
          >
            {/* Tab bar */}
            <div className="flex border-b border-black/8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    id={`cta-tab-${tab.id}`}
                    onClick={() => setActive(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-5 text-sm font-medium transition-all duration-200 border-b-2 ${
                      active === tab.id
                        ? 'border-mona-dark text-mona-dark bg-mona-paper/50'
                        : 'border-transparent text-mona-charcoal hover:text-mona-ink hover:bg-black/3'
                    }`}
                  >
                    <Icon size={15} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Text side */}
              <div className="p-8 lg:p-12">
                <h3 className="font-serif text-3xl lg:text-4xl text-mona-ink mb-4 leading-tight">
                  {current.heading}
                </h3>
                <p className="text-mona-charcoal text-base leading-relaxed mb-8">
                  {current.body}
                </p>
                <ul className="space-y-3 mb-10">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-mona-ink/80">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: '#1c3028' }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#adff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/marktplaats" className="btn-dark inline-flex items-center gap-2">
                  Bereken gratis je budget
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Image side */}
              <div
                className="relative min-h-[280px] lg:min-h-0 overflow-hidden"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(/images/how-section.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(28,48,40,0.25)' }}
                />
                {/* Book consultation chip */}
                <div className="absolute bottom-6 left-6 right-6">
                  <a
                    href="mailto:hallo@mona-flanders.be?subject=Demo aanvragen"
                    className="flex items-center justify-between px-5 py-3.5 rounded-xl font-medium text-sm"
                    style={{ background: '#adff00', color: '#1c3028' }}
                  >
                    Plan een gratis demo
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
