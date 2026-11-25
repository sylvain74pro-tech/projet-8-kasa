// Mémorise la photo en cours. Le modulo fait boucler la galerie et les commandes apparaissent à partir de deux photos.

import { useState } from 'react'
import '../../css/components/Gallery.css'

export default function Gallery({ pictures, title }) {
    const [index, setIndex] = useState(0)
    const count = pictures.length

    // Le modulo permet de revenir à la première photo après la dernière, et inversement.
    function move(step) {
        setIndex((current) => (current + step + count) % count)
    }

    if (count === 0) return null

    return (
        <section className="gallery" aria-label="Photos du logement">
            <img src={pictures[index]} alt={`${title} — photo ${index + 1} sur ${count}`} />
            {count > 1 && (
                <>
                    <button type="button" className="gallery-prev" aria-label="Image précédente" onClick={() => move(-1)} />
                    <button type="button" className="gallery-next" aria-label="Image suivante" onClick={() => move(1)} />
                    <span className="gallery-count" aria-hidden="true">{index + 1}/{count}</span>
                </>
            )}
        </section>
    )
}
