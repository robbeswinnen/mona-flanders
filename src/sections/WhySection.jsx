import { ShieldCheck, Zap, Network, Sliders } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Fiscale Zekerheid',
    body: 'Volledig compliant met de Belgische federale wetgeving rond het mobiliteitsbudget. Wij borgen de correcte RSZ- en belastingtoewijzingen.',
  },
  {
    icon: Zap,
    title: 'Setup in 5 Minuten',
    body: 'Geen ellenlange IT-trajecten. HR-managers kunnen het platform in één ochtend uitrollen en werknemers onboarden via een snelle workflow.',
  },
  {
    icon: Network,
    title: 'Breed Partner Netwerk',
    body: 'Rechtstreekse koppelingen met NMBS, autodeelbedrijven, grote leasemaatschappijen en fietsmerken zoals Cowboy en Cowboy Care.',
  },
  {
    icon: Sliders,
    title: 'Volledig Flexibel',
    body: 'Geef je werknemers de vrijheid om hun budget maandelijks te verdelen over auto, fiets, openbaar vervoer en hun huur of hypotheek.',
  },
]

export default function WhySection() {
  return (
    <section className="section-white border-t border-[#e8e8e8]" id="waarom-mona">
      <div className="container-mona">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="pill-label mb-4">Onze Voordelen</span>
            <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-6xl text-[#14151a] leading-none tracking-tight">
              WAAROM BEDRIJVEN EN WERKNEMERS VOOR MONA KIEZEN
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-[#606060] text-base leading-relaxed">
              Het beheren van mobiliteit kan ingewikkeld zijn, maar MONA combineert fiscale optimalisatie met ongeëvenaard gebruiksgemak. Ontdek hoe wij het verschil maken voor HR-teams en werknemers.
            </p>
          </div>
        </div>

        {/* 2x2 Grid representing Logistiqa Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-bold border border-[#e8e8e8] bg-white p-8 flex flex-col items-start gap-4 hover:border-[#fc4c01]"
            >
              <div className="w-12 h-12 bg-[#fc4c01]/5 text-[#fc4c01] flex items-center justify-center mb-2">
                <Icon size={24} />
              </div>
              <h3 className="font-big-shoulders text-2xl font-black text-[#14151a] tracking-wider uppercase">
                {title}
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
