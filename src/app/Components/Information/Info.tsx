import SectionTitle from "../SectionTitle/Section-title"
import "./Info.scss"


export default function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Idiomas" />
            <div className="languages-info">
                <span> 🇧🇷   PT-BR - Nativo</span>
                <span> 🇺🇸  EN - basico</span>
            </div>
            <SectionTitle text="Linguagens" />
            <div className="education-info">
                <span> C# </span>
                <span> Dart</span>
                <span> JS</span>
                <span> Flutter </span>
                <span> React</span>
            </div>



        </div>
    )
}