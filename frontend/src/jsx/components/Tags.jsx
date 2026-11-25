// Transforme le tableau des caractéristiques en liste. Chaque libellé sert de clé à React.

export default function Tags({ tags }) {
    return (
        <ul className="logement-tags" aria-label="Caractéristiques">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
    )
}
