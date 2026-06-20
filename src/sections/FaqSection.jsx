import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Wie heeft recht op een mobiliteitsbudget?',
    a: 'Werknemers die al minstens 3 maanden een bedrijfswagen hebben (of er recht op hebben) en van werkgevers die minstens 36 maanden minstens één bedrijfswagen ter beschikking hebben gesteld. Het systeem is vrijwillig voor zowel werkgever als werknemer.',
  },
  {
    q: 'Hoeveel bedraagt mijn mobiliteitsbudget?',
    a: 'Het budget is gelijk aan de Total Cost of Ownership (TCO) van je huidige bedrijfswagen. Dit omvat alle kosten: lease, brandstof, verzekering, onderhoud, parkeerkaart, enz. Gemiddeld bedraagt dit €1.000 – €1.500 per maand.',
  },
  {
    q: 'Zijn alle opties in Pilaar 2 belastingvrij?',
    a: 'Ja. Uitgaven in Pilaar 2 (duurzaam vervoer en woonkosten) zijn volledig vrijgesteld van sociale bijdragen en bedrijfsvoorheffing. Dit maakt het mobiliteitsbudget fiscaal bijzonder voordelig.',
  },
  {
    q: 'Wat als ik het budget niet volledig gebruik?',
    a: 'Ongebruikt budget in Pilaar 3 wordt aan het einde van het jaar als cash uitbetaald. Op dit bedrag betaal je enkel een persoonlijke RSZ-bijdrage van 38,07%, maar geen belastingen.',
  },
  {
    q: 'Hoe werkt de Woon-Bonus precies?',
    a: 'Als je op minder dan 10 km van je werkplek woont of minstens 50% thuiswerkt, mag je het resterende Pilaar 2-budget gebruiken voor huur of hypotheekaflossingen. Dit bedrag is volledig belastingvrij, waardoor je maandelijks extra netto-inkomen geniet.',
  },
  {
    q: 'Kan ik mijn keuze maandelijks wijzigen?',
    a: 'Je keuze voor Pilaar 1 (bedrijfswagen) wordt jaarlijks vastgelegd. Keuzes binnen Pilaar 2 kunnen maandelijks worden aangepast via het MONA-platform, zolang het totaal binnen je budget blijft.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section-paper" aria-label="Veelgestelde vragen" id="faq">
      <div className="container-mona">
        {/* Header — Lamoon style: left headline, right intro text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <span className="pill-label mb-5 inline-flex">FAQ</span>
            <h2 className="font-serif text-5xl lg:text-6xl text-mona-ink leading-[1.0]">
              Veelgestelde vragen
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-mona-charcoal text-base leading-relaxed">
              Heb je een andere vraag? Stuur ons een bericht via{' '}
              <a
                href="mailto:hallo@mona-flanders.be"
                className="text-mona-dark font-medium underline underline-offset-4 hover:no-underline"
              >
                hallo@mona-flanders.be
              </a>{' '}
              — ons team antwoordt binnen één werkdag.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-full">
          {faqs.map((faq, i) => (
            <div key={i} className="accordion-row">
              <button
                id={`faq-item-${i}`}
                className="w-full flex items-center justify-between gap-6 py-1 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-serif text-xl lg:text-2xl text-mona-ink">
                  {faq.q}
                </span>
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

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-80 pt-4 pb-2' : 'max-h-0'
                }`}
              >
                <p className="text-mona-charcoal text-base leading-relaxed pr-16">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
