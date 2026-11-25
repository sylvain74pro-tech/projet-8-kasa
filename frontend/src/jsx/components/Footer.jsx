// Affiche le logo partagé et la mention de copyright en bas de chaque page.

import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span role="img" aria-label="Kasa"><Logo /></span>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
