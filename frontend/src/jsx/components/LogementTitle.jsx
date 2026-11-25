// Affiche le titre et la localisation transmis par la fiche logement.

export default function LogementTitle({ title, location }) {
    return (
        <>
            <h1>{title}</h1>
            <p className="logement-location">{location}</p>
        </>
    )
}
