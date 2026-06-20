import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1c3028' }} className="border-t border-white/6">
      <div className="container-mona py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 font-serif text-2xl text-white mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-mona-neon">
                <Zap size={16} className="text-mona-dark fill-mona-dark" />
              </span>
              MONA
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Vlaanderens premier platform voor het mobiliteitsbudget. Slim, duurzaam en volledig belastingvriendelijk.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-linkedin"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-twitter"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-5">Platform</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/marktplaats', label: 'Marktplaats' },
                { to: '/hoe-het-werkt', label: 'Hoe het werkt' },
                { to: '/#faq', label: 'Veelgestelde vragen' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/40 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hallo@mona-flanders.be" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                  <Mail size={13} className="flex-shrink-0" />
                  hallo@mona-flanders.be
                </a>
              </li>
              <li>
                <a href="tel:+3234000000" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                  <Phone size={13} className="flex-shrink-0" />
                  +32 (0)3 400 00 00
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>Meir 1, 2000 Antwerpen<br />België</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="mailto:hallo@mona-flanders.be?subject=Interesse%20in%20MONA"
                id="footer-contact-cta"
                className="btn-neon text-sm py-2.5 px-5 inline-flex"
              >
                <Mail size={14} />
                Stuur een bericht
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {year} MONA Mobility Flanders BV. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <a href="#" className="hover:text-white/45 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white/45 transition-colors">Gebruiksvoorwaarden</a>
            <a href="#" className="hover:text-white/45 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
