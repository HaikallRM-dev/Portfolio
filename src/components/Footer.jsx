import { portfolio } from '../data/portfolio'

export default function Footer() {
  return <footer className="page-container flex flex-wrap justify-between gap-3 border-t border-white/8 py-7 text-xs text-muted"><p>© {new Date().getFullYear()} {portfolio.name}</p><p>{portfolio.footer}</p></footer>
}
