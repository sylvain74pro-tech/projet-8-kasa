import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Collapse from '../components/Collapse.jsx'
import Gallery from '../components/Gallery.jsx'
import NotFound from './NotFound.jsx'
import '../../css/pages/Logement.css'

export default function Logement() {
    const { id } = useParams()
    return <LogementDetails key={id} id={id} />
}

function LogementDetails({ id }) {
    const [result, setResult] = useState({ status: 'loading' })

    useEffect(() => {
        const controller = new AbortController()

        async function fetchProperty() {
            try {
                const response = await fetch(`http://localhost:8080/api/properties/${encodeURIComponent(id)}`, {
                    signal: controller.signal,
                })

                if (response.status === 404) {
                    setResult({ status: 'missing' })
                    return
                }

                if (!response.ok) throw new Error('Erreur de chargement')
                const property = await response.json()
                if (!controller.signal.aborted) setResult({ status: 'ready', property })
            } catch {
                if (!controller.signal.aborted) setResult({ status: 'error' })
            }
        }

        fetchProperty()
        return () => controller.abort()
    }, [id])

    if (result.status === 'missing') return <NotFound />
    if (result.status === 'loading') return <main className="logement"><p role="status">Chargement du logement…</p></main>
    if (result.status === 'error') return <main className="logement"><p role="alert">Impossible de charger le logement.</p></main>

    const { property } = result
    return (
        <main className="logement">
            <Gallery pictures={property.pictures} title={property.title} />

            <div className="logement-summary">
                <div>
                    <h1>{property.title}</h1>
                    <p className="logement-location">{property.location}</p>
                    <ul className="logement-tags" aria-label="Caractéristiques">
                        {property.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
                <div className="logement-meta">
                    <div className="logement-host">
                        <span>{property.host.name}</span>
                        <img src={property.host.picture} alt="" />
                    </div>
                    <div className="logement-rating" role="img" aria-label={`Note : ${property.rating} sur 5`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} aria-hidden="true" className={star <= Number(property.rating) ? 'filled' : ''}>★</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="logement-collapses">
                <Collapse title="Description"><p>{property.description}</p></Collapse>
                <Collapse title="Équipements">
                    <ul className="logement-equipment">
                        {property.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                    </ul>
                </Collapse>
            </div>
        </main>
    )
}
