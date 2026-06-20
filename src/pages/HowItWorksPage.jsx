import { Car, Bike, Train, Home, Shield, Calculator, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    id: 'P1',
    icon: Car,
    title: 'Pilaar 1 — Milieuvriendelijke Wagen',
    color: 'text-mona-neon',
    bg: 'rgba(173,255,0,0.08)',
    border: 'rgba(173,255,0,0.2)',
    description:
      'Je kiest een wagen met lagere CO₂-uitstoot. Elektrische wagens zijn de meest populaire keuze. Fiscaal wordt Pilaar 1 behandeld als een klassieke bedrijfswagen (voordeel van alle aard).',
    items: [
      'Elektrische wagen (meest gekozen)',
      'Plug-in hybride wagen',
      'Waterstofvoertuig',
      'Voordeel alle aard van toepassing',
    ],
  },
  {
    id: 'P2',
    icon: Bike,
    title: 'Pilaar 2 — Duurzaam Vervoer & Wonen',
    color: 'text-sky-400',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
    description:
      'Het resterende budget is 100% vrijgesteld van RSZ en bedrijfsvoorheffing. Je combineert duurzame transportmiddelen en thuisvoordelen.',
    items: [
      'Speed pedelec of e-bike lease',
      'NMBS / De Lijn / MIVB abonnementen',
      'Deelwagens en carpooling',
      'Huur of hypotheek (Woon-Bonus)',
    ],
  },
  {
    id: 'P3',
    icon: Calculator,
    title: 'Pilaar 3 — Cash Uitkering',
    color: 'text-violet-400',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    description:
      'Ongebruikt budget aan het jaareinde wordt als cash uitbetaald. Geen belasting, maar wel een persoonlijke RSZ-bijdrage van 38,07%.',
    items: [
      'Automatische jaarlijkse uitkering',
      'Vrijgesteld van bedrijfsvoorheffing',
      'RSZ-bijdrage werknemer: 38,07%',
      'Netto meer dan loonsverhoring',
    ],
  },
]

const timeline = [
  {
    icon: FileText,
    title: 'Aanvraag werkgever',
    body: 'Je werkgever activeer het mobiliteitsbudgetsysteem (enkel voor wie recht heeft op bedrijfswagen na 36 mnd).',
  },
  {
    icon: Calculator,
    title: 'TCO-berekening',
    body: 'MONA berekent automatisch de Total Cost of Ownership van je huidige bedrijfswagen. Dit wordt je maandbudget.',
  },
  {
    icon: Car,
    title: 'Keuze samenstellen',
    body: 'Via het MONA-dashboard stel je jouw pakket samen: wagen, fiets, trein, en Woon-Bonus.',
  },
  {
    icon: CheckCircle,
    title: 'Goedkeuring & activatie',
    body: 'Na goedkeuring door HR gaat je pakket in op de 1ste van volgende maand. Volledig digitaal.',
  },
]

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-28 pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #071f1d 0%, #0f3d3a 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(173,255,0,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="container-mona relative z-10 text-center">
          <div className="badge mb-4 mx-auto w-fit">Belgische Wetgeving</div>
          <h1 className="font-serif text-4xl lg:text-6xl text-white mb-5">
            Hoe werkt het<br />
            <span className="text-gradient-neon">mobiliteitsbudget?</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
            Een volledig overzicht van de drie pijlers, de fiscale voordelen en het MONA-proces.
            Helder en zonder juridisch jargon.
          </p>
          <Link to="/marktplaats" className="btn-neon inline-flex">
            Direct samenstellen
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-darker" aria-label="De drie pijlers">
        <div className="container-mona">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-5xl text-white">De drie pijlers</h2>
            <p className="text-white/45 mt-3">Uw budget verdeeld over drie fiscale categorieën</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pillars.map(({ id, icon: Icon, title, color, bg, border, description, items }) => (
              <div
                key={id}
                className="glass-card p-6 lg:p-8 flex flex-col gap-5"
              >
                <div
                  className="inline-flex items-center gap-2.5 self-start px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                  style={{ background: bg, border: `1px solid ${border}`, color: color.replace('text-', '') }}
                >
                  <Icon size={13} />
                  {id}
                </div>

                <div>
                  <h3 className="font-serif text-xl text-white mb-3 leading-snug">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                </div>

                <ul className="space-y-2.5 border-t border-white/6 pt-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/55">
                      <CheckCircle size={12} className={`${color} flex-shrink-0 mt-0.5`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Woon-Bonus deep dive */}
      <section className="section-light" aria-label="Woon-Bonus uitleg" id="woon-bonus">
        <div className="container-mona">
          <div className="max-w-3xl mx-auto">
            <span className="badge-dark mb-4 inline-flex">Art. 8ter Mobiliteitsbudgetwet</span>
            <h2 className="font-serif text-3xl lg:text-5xl text-mona-dark mb-6">
              De Woon-Bonus: wonen met fiscaal voordeel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-black/6">
                <div className="flex items-center gap-2 mb-3">
                  <Home size={18} className="text-emerald-600" />
                  <h3 className="font-semibold text-mona-dark">Wanneer van toepassing?</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Je woont op minder dan 10 km van je werkplaats',
                    'Of je werkt minstens 50% van de tijd thuis',
                    'Je hebt nog resterend budget in Pilaar 2',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mona-charcoal/70">
                      <CheckCircle size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-black/6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-sky-600" />
                  <h3 className="font-semibold text-mona-dark">Fiscaal voordeel</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    '0% bedrijfsvoorheffing op dit deel',
                    'Geen RSZ-bijdragen van toepassing',
                    'Volledig vrijgesteld als sociaal voordeel',
                    'Automatisch verrekend door MONA',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mona-charcoal/70">
                      <CheckCircle size={13} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: '#0f3d3a', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h4 className="font-serif text-xl text-white mb-2">Rekenvoorbeeld</h4>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Jan heeft een maandbudget van €1.200. Hij kiest een elektrische wagen (€750) en een
                speed pedelec (€80). Zijn resterend budget van <strong className="text-emerald-400">€370</strong> gaat 
                belastingvrij naar zijn hypotheek. Dat is <strong className="text-emerald-400">€370 netto extra</strong> per 
                maand — equivalent aan een brutoloonverhoging van ruim €600.
              </p>
              <Link
                to="/marktplaats"
                className="btn-neon inline-flex text-sm py-2.5 px-5"
              >
                Bereken jouw Woon-Bonus
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-dark" aria-label="Activatieproces">
        <div className="container-mona">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl lg:text-5xl text-white">
              Activatie in 4 stappen
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-mona-neon/40 via-sky-400/30 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {timeline.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="flex gap-5 items-start">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: 'rgba(173,255,0,0.12)',
                      border: '1px solid rgba(173,255,0,0.25)',
                    }}
                  >
                    <Icon size={16} className="text-mona-neon" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-mona-neon text-mona-dark text-[9px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div className="glass-card flex-1 p-5">
                    <h4 className="font-semibold text-white text-sm mb-1.5">{title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/marktplaats" className="btn-neon inline-flex">
              Start jouw aanvraag
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
