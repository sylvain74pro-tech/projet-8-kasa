// Affiche la photo décorative fournie par la page et superpose le contenu transmis par children.

import '../../css/components/Banner.css'

export default function Banner({ image, className = '', children }) {
    return (
        <div className={('kasa-banner ' + className).trim()}>
            <img className="kasa-banner-image" src={image} alt="" />
            {children}
        </div>
    )
}
