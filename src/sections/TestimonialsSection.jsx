const testimonials = [
  {
    quote: 'Dankzij MONA rijd ik elektrisch en fiets ik ook nog eens gratis naar het station. Mijn netto-loon is met 22% gestegen.',
    name: 'Lien Verstraete',
    role: 'Marketing Manager · Gent',
    initials: 'LV',
  },
  {
    quote: 'De Woon-Bonus was een verrassing. Ons resterende budget van €350 gaat nu elke maand belastingvrij naar onze hypotheek.',
    name: 'Jonas Peeters',
    role: 'IT Consultant · Leuven',
    initials: 'JP',
  },
  {
    quote: 'Het platform is zo intuïtief. Mijn volledige mobiliteitspakket was in 4 minuten samengesteld. Geen papierwerk!',
    name: 'Elisa Declercq',
    role: 'HR Director · Brugge',
    initials: 'ED',
  },
  {
    quote: 'Als HR-manager kon ik het systeem in één ochtend uitrollen voor ons volledige bedrijf. De ondersteuning was uitstekend.',
    name: 'Thomas Maes',
    role: 'HR Manager · Antwerpen',
    initials: 'TM',
  },
  {
    quote: 'Eindelijk een platform dat het Belgische mobiliteitsbudget écht begrijpelijk maakt. Sterk aanbevolen!',
    name: 'Sara Claes',
    role: 'Financieel Directeur · Hasselt',
    initials: 'SC',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-paper border-t border-[#e8e8e8]" aria-label="Getuigenissen">
      <div className="container-mona">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="pill-label mb-4">Gebruikerservaringen</span>
            <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-6xl text-[#14151a] leading-none tracking-tight">
              VERTROUWD DOOR VLAAMSE PROFESSIONALS
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-[#606060] text-sm leading-relaxed">
              Van marketing managers tot financieel directeurs — honderden professionals en HR-teams vertrouwen dagelijks op MONA om hun mobiliteit fiscaal optimaal te beheren.
            </p>
          </div>
        </div>

        {/* 3-Column Masonry/Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {[testimonials[0], testimonials[3]].map(({ quote, name, role, initials }) => (
              <div key={name} className="card-bold bg-white p-6 border border-[#e8e8e8] flex flex-col justify-between">
                <p className="text-[#606060] text-sm leading-relaxed italic mb-6">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8e8]">
                  <div className="w-10 h-10 bg-[#14151a] text-white flex items-center justify-center font-fragment-mono font-bold text-xs">
                    {initials}
                  </div>
                  <div>
                    <div className="font-big-shoulders text-base font-extrabold uppercase text-[#14151a] tracking-wider leading-none">
                      {name}
                    </div>
                    <div className="font-fragment-mono text-[9px] text-[#606060] mt-1 leading-none">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 - containing the orange highlight card */}
          <div className="flex flex-col gap-6">
            
            {/* Highlighted Orange Card */}
            <div className="bg-[#fc4c01] p-8 border border-[#14151a] text-white flex flex-col justify-between" style={{ minHeight: '260px' }}>
              <div>
                <span className="font-fragment-mono text-xs uppercase tracking-widest text-white/70">MONA IMPACT</span>
                <h3 className="font-big-shoulders text-5xl font-black uppercase tracking-tight leading-none text-white mt-4 mb-2">
                  2.400+
                </h3>
                <p className="font-big-shoulders text-lg font-bold uppercase tracking-wider text-white">
                  Actieve gebruikers in heel Vlaanderen
                </p>
              </div>
              <p className="font-fragment-mono text-[10px] text-white/70 mt-4 leading-relaxed">
                Gemiddelde loonstijging van €200 - €450 netto per maand door fiscale optimalisatie.
              </p>
            </div>

            {/* Jonas Testimonial */}
            <div className="card-bold bg-white p-6 border border-[#e8e8e8] flex flex-col justify-between">
              <p className="text-[#606060] text-sm leading-relaxed italic mb-6">
                "{testimonials[1].quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8e8]">
                <div className="w-10 h-10 bg-[#14151a] text-white flex items-center justify-center font-fragment-mono font-bold text-xs">
                  {testimonials[1].initials}
                </div>
                <div>
                  <div className="font-big-shoulders text-base font-extrabold uppercase text-[#14151a] tracking-wider leading-none">
                    {testimonials[1].name}
                  </div>
                  <div className="font-fragment-mono text-[9px] text-[#606060] mt-1 leading-none">
                    {testimonials[1].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {[testimonials[2], testimonials[4]].map(({ quote, name, role, initials }) => (
              <div key={name} className="card-bold bg-white p-6 border border-[#e8e8e8] flex flex-col justify-between">
                <p className="text-[#606060] text-sm leading-relaxed italic mb-6">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8e8]">
                  <div className="w-10 h-10 bg-[#14151a] text-white flex items-center justify-center font-fragment-mono font-bold text-xs">
                    {initials}
                  </div>
                  <div>
                    <div className="font-big-shoulders text-base font-extrabold uppercase text-[#14151a] tracking-wider leading-none">
                      {name}
                    </div>
                    <div className="font-fragment-mono text-[9px] text-[#606060] mt-1 leading-none">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
