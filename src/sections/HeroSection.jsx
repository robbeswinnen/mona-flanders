import { Link } from 'react-router-dom'
import { ArrowRight, Barcode } from 'lucide-react'

const partners = [
  'Audi Belgium',
  'Cowboy Bikes',
  'NMBS / SNCB',
  'SD Worx',
  'Partena Professional',
  'Ethias',
]

export default function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fbfbfb]"
      aria-label="Hero sectie"
    >
      <div className="container-mona">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tech Badge */}
            <div className="pill-label mb-6">
              VLAAMS MOBILITEITSBUDGET · 100% FISCAAL COMPLIANT
            </div>
            
            {/* Giant Title */}
            <h1 className="font-big-shoulders text-6xl sm:text-7xl lg:text-[90px] leading-[0.9] text-[#14151a] tracking-tight mb-8">
              JOUW BUDGET.<br />
              <span className="text-[#fc4c01]">JOUW VRIJHEID.</span>
            </h1>
            
            {/* Solid Technical Divider Line */}
            <div className="w-full border-t-2 border-[#14151a] mb-8" />
            
            {/* Sub-text */}
            <p className="text-[#606060] text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
              Wissel je bedrijfswagen in voor een slim mobiliteitsbudget van gemiddeld <strong>€1.200 per maand</strong>. Combineer een elektrische auto, speed pedelec en trein — en betaal er belastingvrij je huur of hypotheek mee.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/marktplaats" className="btn-orange inline-flex items-center gap-2">
                Stel je pakket samen
                <ArrowRight size={16} />
              </Link>
              <a
                href="#hoe-het-werkt"
                className="btn-ghost-dark inline-flex items-center gap-2"
              >
                Hoe werkt het?
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          {/* Right Column (Technical Budget Receipt Card) */}
          <div className="lg:col-span-5">
            <div className="border-2 border-[#14151a] bg-white p-8 relative shadow-[8px_8px_0px_#14151a]">
              
              {/* Receipt Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e8e8e8]">
                <div>
                  <div className="font-big-shoulders text-2xl font-black text-[#14151a] tracking-wider uppercase">MONA SYSTEM DATA</div>
                  <div className="font-fragment-mono text-[10px] text-[#606060]">TRANSID: #MN-2026-FL</div>
                </div>
                <div className="text-right">
                  <div className="font-fragment-mono text-[10px] text-[#606060]">STATUS: ACTIEF</div>
                  <div className="font-fragment-mono text-[10px] text-[#fc4c01] font-bold">100% BELASTINGVRIJ</div>
                </div>
              </div>

              {/* Receipt Body */}
              <div className="py-6 space-y-4 font-fragment-mono text-xs text-[#14151a]">
                <div className="flex justify-between">
                  <span>BRUTO TCO BUDGET:</span>
                  <span className="font-bold">€ 1.200,00</span>
                </div>
                
                <div className="border-t border-dashed border-[#e8e8e8] my-3" />
                
                <div className="flex justify-between text-[#606060]">
                  <span>PILAAR 1 (E-LEASE):</span>
                  <span>- € 0,00</span>
                </div>
                
                <div className="flex justify-between text-[#606060]">
                  <span>PILAAR 2 (PEDELEC):</span>
                  <span>- € 180,00</span>
                </div>
                
                <div className="flex justify-between text-[#606060]">
                  <span>PILAAR 2 (NMBS TREIN):</span>
                  <span>- € 75,00</span>
                </div>

                <div className="flex justify-between text-[#fc4c01] font-bold">
                  <span>PILAAR 3 (HUUR/HYPOTHEEK):</span>
                  <span>- € 945,00</span>
                </div>

                <div className="border-t-2 border-[#14151a] pt-4 flex justify-between text-sm font-bold">
                  <span>NETTO WAARDE:</span>
                  <span className="text-[#fc4c01]">€ 1.200,00</span>
                </div>
                <div className="flex justify-between text-[10px] text-[#606060]">
                  <span>NETTO RENDEMENT:</span>
                  <span>+ 100% FISCAAL NETTO</span>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="border-t border-[#e8e8e8] pt-6 flex flex-col items-center justify-center gap-2">
                <Barcode size={64} className="text-[#14151a]" strokeWidth={1} />
                <span className="font-fragment-mono text-[9px] text-[#606060] tracking-widest">MONA-MOBILITY-FLANDERS</span>
              </div>

              {/* Corner Tag */}
              <div className="absolute -top-3 -right-3 bg-[#fc4c01] text-white font-big-shoulders text-xs font-bold tracking-widest uppercase px-3 py-1 border border-[#14151a]">
                SLIMSTE KEUZE
              </div>
            </div>
          </div>
        </div>

        {/* Partners Strip */}
        <div className="mt-20 border-t border-[#e8e8e8] pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="font-fragment-mono text-xs uppercase tracking-wider text-[#606060] whitespace-nowrap">
              Vertrouwd door toonaangevende Vlaamse partners:
            </span>
            <div className="flex flex-wrap items-center gap-6 lg:gap-10">
              {partners.map((p) => (
                <span
                  key={p}
                  className="font-big-shoulders text-lg font-bold uppercase tracking-wider text-[#606060] hover:text-[#fc4c01] transition-colors duration-300 cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
