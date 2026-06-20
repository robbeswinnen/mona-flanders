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
    <section className="section-paper border-t border-[#e8e8e8]" id="faq">
      <div className="container-mona">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <span className="pill-label mb-4">Vragen & Antwoorden</span>
            <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-6xl text-[#14151a] leading-none tracking-tight">
              VEELGESTELDE VRAGEN OVER HET BUDGET
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-[#606060] text-sm leading-relaxed">
              Heb je een andere vraag over de wetgeving of de werking van het platform? Neem gerust contact op via{' '}
              <a
                href="mailto:hallo@mona-flanders.be"
                className="text-[#fc4c01] font-bold underline hover:no-underline"
              >
                hallo@mona-flanders.be
              </a>{' '}
              — ons supportteam antwoordt binnen 24 uur.
            </p>
          </div>
        </div>

        {/* Accordion List with heavy top/bottom black borders */}
        <div className="max-w-full">
          {faqs.map((faq, i) => (
            <div key={i} className="accordion-row">
              <button
                id={`faq-item-${i}`}
                className="w-full flex items-center justify-between gap-6 py-2 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {/* Heading styled with Big Shoulders for bold impact */}
                <span className="font-big-shoulders text-xl lg:text-2xl font-extrabold text-[#14151a] tracking-wider uppercase">
                  {faq.q}
                </span>
                
                {/* Interactive indicator in orange / black */}
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: open === i ? '#fc4c01' : 'rgba(20, 21, 26, 0.05)',
                  }}
                >
                  {open === i
                    ? <Minus size={14} className="text-white" />
                    : <Plus size={14} className="text-[#14151a]" />
                  }
                </span>
              </button>

              {/* Collapsible Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-80 pt-4 pb-2' : 'max-h-0'
                }`}
              >
                <p className="text-[#606060] text-sm leading-relaxed pr-12">
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
