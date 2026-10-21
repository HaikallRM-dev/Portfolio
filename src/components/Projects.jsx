import { Film, MailOpen, CalendarHeart, ArrowUpRight, Github } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const icons = { video: Film, letters: MailOpen, invitation: CalendarHeart }

export default function Projects() {
  const section = portfolio.projectsSection
  return <section id="projects" className="section page-container">
    <p className="eyebrow">{section.label}</p><h2>{section.title}</h2><p className="section-description">{section.description}</p>
    <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {portfolio.projects.map((project, index) => {
        const Icon = icons[project.icon]
        return <article className="card flex flex-col overflow-hidden" key={project.title}>
          <div className={`project-art project-art-${index}`} aria-hidden="true">
            <div className="preview-chrome" aria-hidden="true"><span /><span /><span /></div>
            <div className="preview-content"><Icon size={42} strokeWidth={1.25} /></div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-medium tracking-wide text-blue-300">{project.category}</p>
            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
            <span className={`project-status mt-3 self-start ${index === 0 ? 'status-development' : ''}`}>{project.status}</span>
            <p className="mt-4 mb-6 text-sm leading-relaxed text-muted">{project.description}</p>
            {(project.githubUrl || project.demoUrl) && <div className="project-links mt-auto border-t border-white/8 pt-4">
              {project.githubUrl && <a href={project.githubUrl} aria-label={`${project.title} on GitHub`}><Github size={16} aria-hidden="true" />{section.githubLabel}</a>}
              {project.demoUrl && <a href={project.demoUrl} aria-label={`${project.title} live demo`}>{section.demoLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>}
          </div>
        </article>
      })}
    </div>
  </section>
}
