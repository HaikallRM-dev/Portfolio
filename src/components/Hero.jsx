import { ArrowDown, ArrowUpRight, Code2, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Hero() {
  const hero = portfolio.hero
  return <section id="home" className="page-container hero-grid grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
    <div className="hero-copy entrance">
      <p className="eyebrow mb-6">{hero.eyebrow}</p>
      <h1 className="hero-title">{hero.greeting}</h1>
      <p className="hero-subtitle mt-5 text-2xl font-medium sm:text-3xl">{hero.role}</p>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{hero.introduction}</p>
      <div className="mt-9 flex flex-wrap gap-4">
        <a href="#projects" className="button button-primary">{hero.projectsLabel}<ArrowDown size={17} aria-hidden="true" /></a>
        <a href="#contact" className="button button-secondary">{hero.contactLabel}<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </div>
    <div className="hero-art entrance entrance-delayed relative mx-auto flex aspect-square w-full max-w-80 items-center justify-center" aria-hidden="true">
      <div className="orbit orbit-outer" /><div className="orbit orbit-inner" />
      <div className="monogram">{portfolio.monogram}<span>.</span></div>
      <div className="art-icon art-code"><Code2 size={26} /></div>
      <div className="art-icon art-spark"><Sparkles size={24} /></div>
      <span className="art-dot" />
    </div>
  </section>
}
