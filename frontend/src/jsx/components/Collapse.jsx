import { useId, useState } from 'react'
import '../../css/components/Collapse.css'

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const panelId = useId()

    return (
        <div className="collapse">
            <h2>
                <button type="button" aria-expanded={isOpen} aria-controls={panelId}
                    onClick={() => setIsOpen((open) => !open)}>
                    {title}
                    <span aria-hidden="true">⌃</span>
                </button>
            </h2>
            <div id={panelId} className={isOpen ? 'collapse-panel is-open' : 'collapse-panel'} inert={!isOpen}>
                <div className="collapse-content">{children}</div>
            </div>
        </div>
    )
}
