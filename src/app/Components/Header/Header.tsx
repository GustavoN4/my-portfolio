import Image from "next/image";
import MyPhoto from "../../assets/Gustavo.webp";
import './Header.scss'
export function Header() {
    return (
        <div className="header">

            <div>
                <h1>Olá, eu sou Gustavo!</h1>
                <h2 className="subtexto">Densevolvedor web</h2>
            </div>
            <Image
            className="MyPhoto"
                src={MyPhoto}
                alt="Next.js logo"
                width={325}
                height={310}
                priority
            />
        </div>
    );
}