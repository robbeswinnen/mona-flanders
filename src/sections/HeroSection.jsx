import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#1c3028' }}
      aria-label="Hero sectie"
    >
      {/* Full-bleed editorial image — right half */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      {/* Dark overlay — stronger on left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, #1c3028 40%, rgba(28,48,40,0.82) 60%, rgba(28,48,40,0.45) 100%)',
        }}
      />
      {/* Bottom fade into stats section */}
      <div
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #1c3028)' }}
      />

      {/* Content */}
      <div className="container-mona relative z-10 flex flex-col justify-center min-h-screen pb-32 pt-28">
        {/* Pill tag — Lamoon style */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Beste oplossing
          </span>
          <span className="text-white/50 text-xs">Vlaams mobiliteitsbudget — volledig belastingvrij</span>
        </div>

        {/* Main headline — Lamoon's giant left-aligned serif */}
        <h1
          className="font-serif text-6xl sm:text-7xl lg:text-[96px] text-white leading-[0.95] tracking-tight max-w-3xl mb-8 animate-slide-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Jouw budget.<br />
          <span style={{ color: '#adff00' }}>Jouw mobiliteit.</span>
        </h1>

        {/* Thin divider line — like Lamoon */}
        <div
          className="w-full max-w-3xl mb-8 animate-fade-in"
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.15)',
            animationDelay: '0.35s',
            animationFillMode: 'both',
          }}
        />

        {/* Sub-copy */}
        <p
          className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 animate-slide-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Wissel je bedrijfswagen in voor een slim mobiliteitsbudget van €1.200/mnd.
          Combineer een elektrische wagen, speed pedelec en trein — en woon er belastingvrij bovenop.
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
        >
          <Link to="/marktplaats" className="btn-dark inline-flex items-center gap-2">
            Stel je pakket samen
            <ArrowRight size={16} />
          </Link>
          <a
            href="#hoe-het-werkt"
            className="text-white/60 text-sm font-medium hover:text-white transition-colors flex items-center gap-1.5"
          >
            Hoe werkt het?
            <ArrowRight size={13} className="opacity-60" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs z-10">
        <span className="tracking-widest uppercase text-[10px]">Ontdek meer</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}
