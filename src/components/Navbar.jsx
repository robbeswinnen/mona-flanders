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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white border-[#e8e8e8] shadow-sm'
          : 'bg-[#14151a]/95 border-white/5 backdrop-blur-md'
      }`}
    >
      <div className="container-mona">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 font-big-shoulders text-3xl font-extrabold uppercase tracking-tight hover:opacity-90 transition-opacity ${
              scrolled ? 'text-[#14151a]' : 'text-white'
            }`}
          >
            <span className="flex items-center justify-center w-8 h-8 bg-[#fc4c01] text-white">
              <Zap size={16} className="fill-white text-white" />
            </span>
            <span>MONA</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-bold tracking-widest uppercase font-big-shoulders transition-all duration-200 ${
                      isActive
                        ? scrolled
                          ? 'text-[#fc4c01]'
                          : 'text-[#fc4c01]'
                        : scrolled
                          ? 'text-[#606060] hover:text-[#14151a]'
                          : 'text-white/70 hover:text-white'
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
              className={`text-xs font-bold tracking-widest uppercase font-big-shoulders py-2.5 px-6 border transition-all duration-300 ${
                scrolled
                  ? 'border-[#14151a]/25 text-[#14151a] hover:bg-[#14151a] hover:text-white'
                  : 'border-white/20 text-white hover:bg-white hover:text-[#14151a]'
              }`}
            >
              Contact
            </a>
            <Link to="/marktplaats" className="btn-orange text-xs py-2.5 px-6">
              Start nu
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className={`md:hidden flex items-center justify-center w-10 h-10 border transition-all ${
              scrolled
                ? 'border-[#14151a]/15 text-[#14151a] hover:bg-black/5'
                : 'border-white/10 text-white/80 hover:bg-white/5'
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
          open ? 'max-h-80 opacity-100 border-t border-[#e8e8e8]' : 'max-h-0 opacity-0'
        }`}
        style={{ background: '#ffffff' }}
      >
        <div className="container-mona py-4 flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-bold tracking-widest uppercase font-big-shoulders transition-all ${
                  isActive
                    ? 'text-[#fc4c01] bg-black/[0.02]'
                    : 'text-[#14151a] hover:bg-black/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-[#e8e8e8]">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ghost-dark text-xs py-2.5 flex-1 justify-center text-center"
            >
              Contact
            </a>
            <Link
              to="/marktplaats"
              onClick={() => setOpen(false)}
              className="btn-orange text-xs py-2.5 flex-1 justify-center text-center"
            >
              Start nu
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
