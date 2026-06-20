import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBandSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#14151a] text-white border-t border-white/5" aria-label="Aan de slag">
      <div className="container-mona">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Tag */}
          <span className="badge-dark mb-6">Start Vandaag</span>

          {/* Large Header */}
          <h2 className="font-big-shoulders text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white mb-6 leading-none">
            KLAAR OM JE MOBILITEIT TE OPTIMALISEREN?
          </h2>

          {/* Paragraph */}
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
            Ontdek hoe eenvoudig het is om de administratie rond het mobiliteitsbudget te automatiseren. Start nu gratis en geniet onmiddellijk van fiscaal voordeel.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/marktplaats" className="btn-orange inline-flex items-center gap-2">
              Stel je pakket samen
              <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:hallo@mona-flanders.be?subject=Demo aanvragen"
              className="btn-ghost inline-flex items-center gap-2"
            >
              Plan een gratis demo
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
