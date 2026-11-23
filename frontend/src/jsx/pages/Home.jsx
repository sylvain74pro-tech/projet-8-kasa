import { useEffect, useState } from 'react'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import '../../css/pages/Home.css'

const propertiesUrl = 'http://localhost:8080/api/properties'

export default function Home() {
    const [properties, setProperties] = useState([])
    const [status, setStatus] = useState('loading')

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
            <Banner className="home-banner">
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
