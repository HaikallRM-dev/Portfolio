import { portfolio } from '../data/portfolio'

export default function Navbar() {
  return <header className="site-header">
    <nav className="page-container navbar" aria-label="Main navigation">
      <a href="#home" className="logo" aria-label={`${portfolio.name}, home`}>{portfolio.logo}</a>
      <div className="nav-links text-sm text-muted">
        {portfolio.navigation.map(item => <a className="nav-link" key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </div>
    </nav>
  </header>
}
