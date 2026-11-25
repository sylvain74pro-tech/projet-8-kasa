// Lit l’identifiant dans l’URL, récupère la fiche depuis l’API et répartit ses données entre les composants.

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Collapse from '../components/Collapse.jsx'
import Gallery from '../components/Gallery.jsx'
import LogementTitle from '../components/LogementTitle.jsx'
import Tags from '../components/Tags.jsx'
import Host from '../components/Host.jsx'
import Rating from '../components/Rating.jsx'
import NotFound from './NotFound.jsx'
import '../../css/pages/Logement.css'

export default function Logement() {
    const { id } = useParams()
    // La clé réinitialise la fiche et sa galerie quand on change de logement.
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
        // Annule la requête si la fiche est quittée avant la réponse.
        return () => controller.abort()
    }, [id])

    // Dans ce cas la route existe, mais l’API ne connaît pas cet identifiant.
    if (result.status === 'missing') return <NotFound />
    if (result.status === 'loading') return <main className="logement"><p role="status">Chargement du logement…</p></main>
    if (result.status === 'error') return <main className="logement"><p role="alert">Impossible de charger le logement.</p></main>

    const { property } = result
    return (
        <main className="logement">
            <Gallery pictures={property.pictures} title={property.title} />

            <div className="logement-summary">
                <div>
                    <LogementTitle title={property.title} location={property.location} />
                    <Tags tags={property.tags} />
                </div>
                <div className="logement-meta">
                    <Host host={property.host} />
                    <Rating rating={property.rating} />
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
