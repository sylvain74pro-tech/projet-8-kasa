// Crée un lien vers le logement à partir de son id. Le titre est visible et sert aussi de texte alternatif à la photo.

import { Link } from 'react-router'
import '../../css/components/Card.css'

export default function Card({ id, cover, title }) {
    return (
        <Link className="property-card" to={`/logement/${encodeURIComponent(id)}`}>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    )
}
