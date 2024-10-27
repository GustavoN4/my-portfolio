import { Header } from "./Components/Header/Header";
import './globals.scss';
import './Components/style/Home.scss';
import { Experiece } from "./Components/Experiece/Experiece";
export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experiece />


      <div className="infos">
        <h3>Linguagens</h3>
        <div className="languages-info">
          <span>PT-BR - Nativo</span>
        </div>
        <h3>Educação</h3>
        <div className="education-info">
          <span>Analise e desenvolvimento de sistemas cruzeiro do sul</span>
        </div>

      </div>

      <div className="buttons">
        <div className="social"></div>
        <button>Contate me</button>
      </div>

    </main>
  );
}
