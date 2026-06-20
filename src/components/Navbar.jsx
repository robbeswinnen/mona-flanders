import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/marktplaats', label: 'Marktplaats' },
    { to: '/hoe-het-werkt', label: 'Hoe het werkt' },
  ]

  const isLight = scrolled

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container-mona">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2.5 font-serif text-2xl tracking-tight hover:opacity-90 transition-opacity ${
              isLight ? 'text-mona-dark' : 'text-white'
            }`}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-mona-neon flex-shrink-0">
              <Zap size={16} className="text-mona-dark fill-mona-dark" />
            </span>
            MONA
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? isLight
                          ? 'bg-mona-dark text-white'
                          : 'bg-mona-neon text-mona-dark'
                        : isLight
                          ? 'text-mona-dark/70 hover:text-mona-dark hover:bg-black/6'
                          : 'text-white/70 hover:text-white hover:bg-white/8'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className={`text-sm py-2.5 px-5 rounded-full border font-medium transition-all duration-300 ${
                isLight
                  ? 'border-black/20 text-mona-dark hover:bg-black/5'
                  : 'border-white/25 text-white/90 hover:bg-white/8'
              }`}
            >
              Contact
            </a>
            <Link to="/marktplaats" className="btn-neon text-sm py-2.5 px-5">
              Start nu
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
              isLight
                ? 'border-black/15 text-mona-dark hover:bg-black/5'
                : 'border-white/15 text-white/80 hover:bg-white/8'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
          >
            <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="container-mona py-4 flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-mona-dark text-white'
                    : 'text-mona-dark/80 hover:bg-black/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-black/8">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-ghost-dark text-sm py-2.5 flex-1 justify-center">
              Contact
            </a>
            <Link to="/marktplaats" className="btn-neon text-sm py-2.5 flex-1 justify-center">
              Start nu
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
