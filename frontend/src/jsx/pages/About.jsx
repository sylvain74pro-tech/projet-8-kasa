// Lit about.json et crée un panneau Collapse par entrée avec map. Chaque id sert de clé stable à React.

import Banner from '../components/Banner.jsx'
import Collapse from '../components/Collapse.jsx'
import sections from '../data/about.json'
import '../../css/pages/About.css'

const bannerImage = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1440&auto=format&fit=crop'

export default function About() {
    return (
        <main className="about">
            <Banner className="about-banner" image={bannerImage}>
                <h1 className="about-title">À propos</h1>
            </Banner>
            <div className="about-collapses">
                {sections.map(({ id, title, text }) => (
                    <Collapse key={id} title={title}>
                        <p>{text}</p>
                    </Collapse>
                ))}
            </div>
        </main>
    )
}
