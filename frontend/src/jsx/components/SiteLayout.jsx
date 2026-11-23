import { Link, NavLink, Outlet } from 'react-router'
import '../../css/components/SiteLayout.css'

function Logo() {
  return <span className="kasa-logo" aria-hidden="true">K<span className="kasa-house" />sa</span>
}

export default function SiteLayout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" aria-label="Kasa, accueil"><Logo /></Link>
        <nav aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <span role="img" aria-label="Kasa"><Logo /></span>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}
