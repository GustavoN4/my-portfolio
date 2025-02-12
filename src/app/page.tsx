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
        <button className="btn btnPrimary" > 
       <a href="https://api.whatsapp.com/qr/QUCAWRSNWU4QO1?autoload=1&app_absent=0" target="_blank">Contate me</a>
          </button>
      </div>

    </main>
  );
}
