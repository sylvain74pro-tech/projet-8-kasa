// Affiche Header et Footer autour de la page enfant, qui prend la place de Outlet.

import { Outlet } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import '../../css/components/SiteLayout.css'

export default function SiteLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  )
}
