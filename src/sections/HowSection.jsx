import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Pilaar 1 — Elektrische wagen',
    body: 'Geef je huidige bedrijfswagen terug en ontvang een maandbudget op basis van de Total Cost of Ownership (TCO). Kies vervolgens een duurzame elektrische wagen via Pilaar 1.',
    bullets: [
      'Volledige TCO omgezet in budget',
      'Breed aanbod aan elektrische modellen',
      'Lease & verzekering inbegrepen',
    ],
  },
  {
    num: '02',
    title: 'Pilaar 2 — Duurzaam transport',
    body: 'Gebruik het resterende budget voor een speed pedelec, treinabonnement, deelwagen of een combinatie. 100% vrijgesteld van sociale bijdragen en bedrijfsvoorheffing.',
    bullets: [
      'Speed pedelec, trein, deelwagen',
      'Volledig belastingvrij',
      'Maandelijks aanpasbaar',
    ],
  },
  {
    num: '03',
    title: 'Pilaar 3 — Woon-Bonus',
    body: 'Resterend budget wordt automatisch belastingvrij toegewezen aan huur of hypotheek — mits je op minder dan 10 km van je werkplek woont of minstens 50% thuiswerkt.',
    bullets: [
      'Huur of hypotheek belastingvrij',
      'Automatisch verrekend',
      'Ideaal voor thuiswerkers',
    ],
  },
]

export default function HowSection() {
  const [open, setOpen] = useState(0)

  return (
    <section
      className="section-paper"
      aria-label="Hoe het werkt"
      id="hoe-het-werkt"
    >
      <div className="container-mona">
        {/* Section header — Lamoon "About us" style */}
        <div className="mb-14">
          <span className="pill-label mb-5 inline-flex">Hoe het werkt</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif text-5xl lg:text-6xl text-mona-ink leading-[1.0]">
              Drie pilaren.<br />Eén slim budget.
            </h2>
            <p className="text-mona-charcoal text-base leading-relaxed lg:max-w-sm">
              Het Belgische mobiliteitsbudget klinkt complex, maar MONA maakt het
              eenvoudig. Volg drie stappen en geniet onmiddellijk van fiscale voordelen.
            </p>
          </div>
        </div>

        {/* Split: image left, accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: editorial image + quote overlay */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="/images/how-section.png"
                alt="MONA mobiliteitsbudget gebruiker"
                className="w-full h-full object-cover"
              />
              {/* Quote overlay — Lamoon's green card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-6 rounded-xl"
                style={{ background: '#adff00' }}
              >
                <p className="font-serif text-lg text-mona-dark leading-snug mb-4">
                  "Dankzij MONA rijd ik elektrisch én woon ik belastingvrij.
                  Mijn netto-loon steeg met 22%."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: '#1c3028' }}
                  >
                    LV
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-mona-dark">Lien Verstraete</div>
                    <div className="text-xs text-mona-dark/60">Marketing Manager · Gent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:pt-4">
            <div>
              {pillars.map((p, i) => (
                <div key={p.num} className="accordion-row">
                  <button
                    id={`pillar-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left py-1"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-mona-stone w-6 flex-shrink-0">
                        {p.num}
                      </span>
                      <span className="font-serif text-xl lg:text-2xl text-mona-ink">
                        {p.title}
                      </span>
                    </div>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{
                        background: open === i ? '#1c3028' : 'rgba(0,0,0,0.06)',
                      }}
                    >
                      {open === i
                        ? <Minus size={14} className="text-mona-neon" />
                        : <Plus size={14} className="text-mona-ink" />
                      }
                    </span>
                  </button>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open === i ? 'max-h-80 pt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-mona-charcoal text-sm leading-relaxed pl-10 mb-4">
                      {p.body}
                    </p>
                    <ul className="pl-10 space-y-2">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-mona-ink/70">
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
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="/marktplaats" className="btn-dark inline-flex items-center gap-2">
                Start met samenstellen
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
