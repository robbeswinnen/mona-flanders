import { Linkedin, Twitter, Globe } from 'lucide-react'

export default function QuoteSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#14151a] text-white border-t border-white/5" aria-label="Bedrijfscitaat">
      <div className="container-mona">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Quote icon / decoration */}
          <span className="font-fragment-mono text-[#fc4c01] text-6xl leading-none select-none mb-6">“</span>

          {/* Large Quote Title */}
          <h2 className="font-big-shoulders text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white font-extrabold uppercase tracking-tight mb-8">
            WE HEBBEN MONA OPGERICHT OM HET WOUD VAN BELGISCHE FISCALITEIT EN MOBILITEIT TRANSPARANT TE MAKEN. WE VERPLAATSEN GEEN PAPIERWERK — WE VERHOGEN HET NETTO RENDEMENT VOOR IEDEREEN.
          </h2>

          {/* Speaker Details */}
          <div className="font-big-shoulders text-xl font-bold tracking-widest uppercase text-[#fc4c01] mb-1">
            Jef De Vos
          </div>
          
          <p className="text-white/45 text-xs font-fragment-mono uppercase tracking-wider mb-6">
            Oprichter & Chief Executive Officer, MONA Flanders
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-white/40">
            <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="/" className="hover:text-white transition-colors" aria-label="Website">
              <Globe size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
