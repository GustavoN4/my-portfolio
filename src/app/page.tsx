import Image from "next/image"; 

export default function Home() {
  return (
    <main>
      <div className="header">
      <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <h1>Olá, eu sou Gustavo!</h1>
          <h2>Densevolvedor web</h2>
        </div>
      </div>
      
    </main>
   );
}
