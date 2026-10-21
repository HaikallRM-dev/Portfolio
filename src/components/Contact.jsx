import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const icons = { email: Mail, github: Github, linkedin: Linkedin }

export default function Contact() {
  const contact = portfolio.contact
  const links = contact.links.filter(link => link.url)
  return <section id="contact" className="section page-container">
    <div className="contact-panel rounded-2xl border border-white/10 p-6 sm:p-12">
      <p className="eyebrow">{contact.label}</p><h2>{contact.title}</h2><p className="section-description max-w-lg">{contact.description}</p>
      {links.length > 0 && <div className="mt-8 grid gap-4 md:grid-cols-3">
        {links.map(link => {
          const Icon = icons[link.icon]
          return <a key={link.label} href={link.url} className="contact-item"><span className="contact-icon"><Icon size={22} aria-hidden="true" /></span><span className="min-w-0 font-medium">{link.label}</span><ArrowUpRight className="ml-auto shrink-0" size={18} aria-hidden="true" /></a>
        })}
      </div>}
    </div>
  </section>
}
