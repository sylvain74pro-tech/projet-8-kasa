// Affiche le nom et la photo de la personne qui héberge. Le nom reste disponible sous forme de texte.

export default function Host({ host }) {
    return (
        <div className="logement-host">
            <span>{host.name}</span>
            <img src={host.picture} alt="" />
        </div>
    )
}
