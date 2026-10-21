import { portfolio } from '../data/portfolio'

export default function About() {
  const about = portfolio.about
  return <section id="about" className="section page-container">
    <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
      <div><p className="eyebrow">{about.label}</p><h2>{about.title}</h2></div>
      <div className="about-copy"><div className="space-y-5 text-lg leading-relaxed text-muted">{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><p className="mt-7 border-l-2 border-accent pl-4 text-sm font-medium">{about.note}</p></div>
    </div>
  </section>
}
