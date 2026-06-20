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

const partners = [
  'Audi Belgium',
  'Cowboy Bikes',
  'NMBS / SNCB',
  'SD Worx',
  'Partena Professional',
  'Ethias',
]

export default function TestimonialsSection() {
  return (
    <section
      className="section-white"
      aria-label="Getuigenissen"
    >
      <div className="container-mona">
        {/* Section header */}
        <div className="mb-12">
          <span className="pill-label mb-5 inline-flex">Wat gebruikers zeggen</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <h2 className="font-serif text-5xl lg:text-6xl text-mona-ink leading-[1.0]">
              Vertrouwd door ambitieuze professionals.
            </h2>
            <p className="text-mona-charcoal text-base leading-relaxed lg:max-w-sm">
              Van marketing managers tot HR-directeurs — duizenden Belgen vertrouwen
              op MONA voor hun mobiliteitsbudget.
            </p>
          </div>
        </div>

        {/* Masonry testimonial grid — Lamoon layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            {[testimonials[0], testimonials[3]].map(({ quote, name, role, initials }) => (
              <div key={name} className="card-light p-6 flex flex-col gap-4">
                <p className="text-mona-ink/75 text-sm leading-relaxed flex-1">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/6">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: '#1c3028' }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-mona-ink text-sm font-semibold">{name}</div>
                    <div className="text-mona-stone text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle column — taller, with featured highlight */}
          <div className="flex flex-col gap-5">
            <div
              className="card-light p-6 flex flex-col gap-4"
            >
              <p className="text-mona-ink/75 text-sm leading-relaxed">
                "{testimonials[1].quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/6">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: '#1c3028' }}
                >
                  {testimonials[1].initials}
                </div>
                <div>
                  <div className="text-mona-ink text-sm font-semibold">{testimonials[1].name}</div>
                  <div className="text-mona-stone text-xs">{testimonials[1].role}</div>
                </div>
              </div>
            </div>

            {/* Featured number card — Lamoon's video-like centered card */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3"
              style={{ background: '#adff00', minHeight: '200px' }}
            >
              <div className="font-serif text-6xl text-mona-dark leading-none">2.400+</div>
              <div className="text-mona-dark/70 text-sm font-medium">Actieve gebruikers in Vlaanderen</div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {[testimonials[2], testimonials[4]].map(({ quote, name, role, initials }) => (
              <div key={name} className="card-light p-6 flex flex-col gap-4">
                <p className="text-mona-ink/75 text-sm leading-relaxed flex-1">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/6">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: '#1c3028' }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-mona-ink text-sm font-semibold">{name}</div>
                    <div className="text-mona-stone text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Partner logo strip — Lamoon "Trusted by 2200+ brands" ── */}
        <div
          className="mt-16 rounded-2xl border border-black/8 px-8 py-6 flex flex-wrap items-center justify-between gap-6"
          style={{ background: '#f7f7f7' }}
        >
          <p className="text-mona-stone text-sm font-medium whitespace-nowrap">
            Vertrouwd door{' '}
            <span className="text-mona-ink font-semibold">toonaangevende Belgische partners</span>
          </p>
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            {partners.map((p) => (
              <span
                key={p}
                className="font-semibold text-mona-charcoal/50 hover:text-mona-ink transition-colors duration-300 text-sm tracking-wide cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
