// Affiche le message 404 et fournit un lien pour revenir à l’accueil.

import { Link } from 'react-router'
import '../../css/pages/NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  )
}
