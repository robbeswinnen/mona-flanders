export default function PartnersSection() {
  const partners = [
    'Audi Belgium',
    'Cowboy Bikes',
    'NMBS / SNCB',
    'SD Worx',
    'Partena Professional',
    'Ethias',
  ]

  return (
    <section
      className="py-12 border-y border-white/6"
      style={{ background: '#0a2e2b' }}
      aria-label="Partners"
    >
      <div className="container-mona">
        <p className="text-center text-white/25 text-xs uppercase tracking-widest mb-8">
          Vertrouwd door toonaangevende Belgische partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((p) => (
            <span
              key={p}
              className="font-semibold text-white/20 hover:text-white/50 transition-colors duration-300 text-sm tracking-wider cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
