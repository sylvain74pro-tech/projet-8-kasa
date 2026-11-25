// Affiche le logo cliquable et les liens principaux. NavLink indique la page active.

import { Link, NavLink } from 'react-router'
import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="Kasa, accueil"><Logo /></Link>
      <nav aria-label="Navigation principale">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  )
}
