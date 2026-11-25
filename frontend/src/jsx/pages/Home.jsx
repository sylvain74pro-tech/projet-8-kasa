// Charge les logements depuis l’API et affiche une carte par logement. useState mémorise les données et l’état du chargement.

import { useEffect, useState } from 'react'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import '../../css/pages/Home.css'

const bannerImage = 'https://images.unsplash.com/photo-1510414842594-a61c69bae57?w=1440&auto=format&fit=crop'

const propertiesUrl = 'http://localhost:8080/api/properties'

export default function Home() {
    const [properties, setProperties] = useState([])
    const [status, setStatus] = useState('loading')

    // Le tableau de dépendances vide déclenche la récupération au montage.
    useEffect(() => {
        async function fetchProperties() {
            try {
                const response = await fetch(propertiesUrl)

                if (!response.ok) {
                    setStatus('error')
                    return
                }

                setProperties(await response.json())
                setStatus('ready')
            } catch {
                setStatus('error')
            }
        }

        fetchProperties()
    }, [])

    return (
        <main className="home">
            <Banner className="home-banner" image={bannerImage}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>

            {status === 'loading' && <p>Chargement des logements…</p>}
            {status === 'error' && <p>Impossible de charger les logements.</p>}

            <section className="home-grid" aria-label="Logements disponibles">
                {properties.map((property) => (
                    <Card key={property.id} id={property.id} cover={property.cover} title={property.title} />
                ))}
            </section>
        </main>
    )
}
