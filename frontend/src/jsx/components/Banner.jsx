import '../../css/components/Banner.css'

export default function Banner({ className = '', children }) {
    return <div className={['kasa-banner', className].filter(Boolean).join(' ')}>{children}</div>
}
