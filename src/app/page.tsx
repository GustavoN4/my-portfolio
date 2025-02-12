import { Header } from "./Components/Header/Header";
import './globals.scss';
import './Components/style/Home.scss';
import { Experiece } from "./Components/Experiece/Experiece";
import Info from "./Components/Information/Info";
export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experiece />
      <Info />

      <div className="buttons">
        <div className="social"></div>
        <button className="btn btnPrimary" >Contate me</button>
      </div>

    </main>
  );
}
