import { Zap, Bike, Train, Home, ShieldCheck, LayoutDashboard } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Zap,
    title: 'Pilaar 1 — Elektrische Lease',
    body: 'Kies een milieuvriendelijke elektrische wagen. Volledig gefinancierd uit je TCO-budget, inclusief verzekering, onderhoud en laadpas.',
  },
  {
    num: '02',
    icon: Bike,
    title: 'Pilaar 2 — Zachte Mobiliteit',
    body: 'Lease een speed pedelec, stadsfiets of e-scooter belastingvrij. Perfect voor vlot woon-werkverkeer en 100% fiscaal aftrekbaar.',
  },
  {
    num: '03',
    icon: Train,
    title: 'Pilaar 2 — Openbaar Vervoer',
    body: 'Treinabonnementen (NMBS), buskaarten en tramritten voor het hele gezin. Zelfs internationale treintickets binnen Europa vallen hieronder.',
  },
  {
    num: '04',
    icon: Home,
    title: 'Pilaar 3 — Huisvesting (Woon-Bonus)',
    body: 'Woon je binnen 10 km van je werk of werk je minstens 50% thuis? Gebruik je budget belastingvrij voor huur of je hypotheekaflossingen.',
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Fiscale Optimalisatie',
    body: 'Automatische verwerking van RSZ- en belastingregels. Wij zorgen voor 100% wettelijke compliance en de meest gunstige budgettoewijzing.',
  },
  {
    num: '06',
    icon: LayoutDashboard,
    title: 'HR & Employee Dashboard',
    body: 'Beheer budgetten, keur declaraties goed en bekijk verbruik in realtime. Eenvoudige integratie met je bestaande payroll (SD Worx, Partena, etc.).',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-paper border-t border-[#e8e8e8]" id="diensten">
      <div className="container-mona">

        {/* Section Header */}
        <div className="mb-14">
          <span className="pill-label mb-4">Onze Oplossingen</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-6xl text-[#14151a] leading-none tracking-tight">
                COMPLEET MOBILITEITSBEHEER IN DRIE PILAREN
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#606060] text-sm leading-relaxed">
                Of je nu kiest voor elektrisch rijden, openbaar vervoer, of je huur belastingvrij wilt laten betalen — MONA combineert alles in één flexibel pakket.
              </p>
            </div>
          </div>
        </div>

        {/* 3x2 Grid representing Logistiqa Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ num, icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-bold relative border border-[#e8e8e8] bg-white p-8 flex flex-col justify-between"
            >
              <div>
                {/* Num indicator in top right */}
                <span className="absolute top-6 right-6 font-fragment-mono text-xs text-[#fc4c01] font-bold">
                  {num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#fc4c01]/5 text-[#fc4c01] flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="font-big-shoulders text-2xl font-black text-[#14151a] tracking-wider uppercase mb-3">
                  {title}
                </h3>
              </div>

              {/* Body text */}
              <p className="text-[#606060] text-sm leading-relaxed mt-2">
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
