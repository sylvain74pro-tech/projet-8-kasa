// Associe les URL aux pages. :id identifie un logement et la route * affiche la page 404 pour les chemins inconnus.

import { Route, Routes } from 'react-router'
import SiteLayout from '../components/SiteLayout.jsx'
import Home from '../pages/Home.jsx'
import Logement from '../pages/Logement.jsx'
import About from '../pages/About.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
