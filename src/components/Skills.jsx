import { Code2, Film, PenTool, Megaphone } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const icons = { code: Code2, video: Film, design: PenTool, marketing: Megaphone }

export default function Skills() {
  const section = portfolio.skillsSection
  return <section id="skills" className="section page-container">
    <p className="eyebrow">{section.label}</p><h2>{section.title}</h2><p className="section-description">{section.description}</p>
    <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {portfolio.skills.map(skill => {
        const Icon = icons[skill.icon]
        return <article className="card skill-card p-6" key={skill.title}><div className="icon-box"><Icon size={23} aria-hidden="true" /></div><h3 className="mt-6 text-lg font-semibold">{skill.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{skill.description}</p></article>
      })}
    </div>
  </section>
}
