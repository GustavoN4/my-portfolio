import "./SectionTitle.scss"
interface SectionTitleProps {
    text: string
}
export default function SectionTitle({text}: SectionTitleProps) {
    return (
        <h3 className="section-title">{text}</h3>
    )
}