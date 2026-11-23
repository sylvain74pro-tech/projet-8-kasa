import Banner from '../components/Banner.jsx'
import Collapse from '../components/Collapse.jsx'
import '../../css/pages/About.css'

const sections = [
    { title: 'Fiabilité', text: 'Les annonces présentent les logements tels qu’ils sont.' },
    { title: 'Respect', text: 'Chaque échange entre hôtes et voyageurs doit rester respectueux.' },
    { title: 'Service', text: 'Kasa accompagne les hôtes et les voyageurs.' },
    { title: 'Sécurité', text: 'Kasa veille à la sécurité des séjours.' },
]

export default function About() {
    return (
        <main className="about">
            <Banner className="about-banner">
                <h1 className="about-title">À propos</h1>
            </Banner>
            <div className="about-collapses">
                {sections.map(({ title, text }) => (
                    <Collapse key={title} title={title}>
                        <p>{text}</p>
                    </Collapse>
                ))}
            </div>
        </main>
    )
}
