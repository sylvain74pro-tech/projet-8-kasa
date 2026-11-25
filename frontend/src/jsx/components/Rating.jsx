// Compare la note à chacune des cinq étoiles pour la colorer. aria-label donne la note complète aux lecteurs d’écran.

export default function Rating({ rating }) {
    return (
        <div className="logement-rating" role="img" aria-label={`Note : ${rating} sur 5`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} aria-hidden="true" className={star <= Number(rating) ? 'filled' : ''}>★</span>
            ))}
        </div>
    )
}
