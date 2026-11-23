import { Link } from 'react-router'
import '../../css/components/Card.css'

export default function Card({ id, cover, title }) {
    return (
        <Link className="property-card" to={`/logement/${encodeURIComponent(id)}`}>
            <img src={cover} alt="" />
            <h2>{title}</h2>
        </Link>
    )
}
