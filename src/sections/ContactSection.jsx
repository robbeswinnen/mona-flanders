import { useState } from 'react'
import { Send, CheckCircle, Mail, Building, User } from 'lucide-react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    // In production: POST to an API / Cloudflare Worker / Formspree
    setSent(true)
  }

  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: '#071f1d' }}
      aria-label="Contactformulier"
      id="contact-form"
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(173,255,0,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-mona relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <span className="badge mb-6">Neem contact op</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Klaar om te starten?<br />
              <span className="text-gradient-neon">We helpen je verder.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Heb je vragen over de implementatie bij jouw bedrijf, of wil je een persoonlijke demo?
              Ons Vlaams team staat elke werkdag voor je klaar.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'hallo@mona-flanders.be', href: 'mailto:hallo@mona-flanders.be' },
                { icon: Building, label: 'Meir 1, 2000 Antwerpen', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/6 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <Icon size={14} />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card p-6 lg:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle size={48} className="text-mona-neon" />
                <h3 className="font-serif text-2xl text-white">Bericht verzonden!</h3>
                <p className="text-white/50 text-sm">
                  We nemen binnen 1 werkdag contact met je op.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', company: '', email: '', message: '' }) }}
                  className="btn-ghost text-sm py-2 px-5 mt-2"
                >
                  Nieuw bericht
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form-element" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-name" className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                      Naam
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                      <input
                        id="cf-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jan Janssen"
                        className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 focus:ring-mona-neon/40"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cf-company" className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                      Bedrijf
                    </label>
                    <div className="relative">
                      <Building size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                      <input
                        id="cf-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Bedrijfsnaam BV"
                        className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 focus:ring-mona-neon/40"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-email" className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                    E-mailadres
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                    <input
                      id="cf-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jan@bedrijf.be"
                      className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 focus:ring-mona-neon/40"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-message" className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                    Bericht
                  </label>
                  <textarea
                    id="cf-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Vertel ons meer over uw situatie..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-1 focus:ring-mona-neon/40 resize-none"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>

                <button
                  type="submit"
                  id="cf-submit"
                  className="btn-neon w-full justify-center"
                >
                  <Send size={15} />
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
