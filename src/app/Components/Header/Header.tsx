import Image from "next/image";
import './Header.scss'
export function Header() {
    return (
        <div className="header">

            <div>
                <h1>Olá, eu sou Gustavo!</h1>
                <h2 className="subtexto">Densevolvedor web</h2>
            </div>
            <Image
                src="https://nextjs.org/icons/next.svg"
                alt="Next.js logo"
                width={325}
                height={310}
                priority
            />
        </div>
    );
}