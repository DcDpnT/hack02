import Navbar from "./Navbar"
import brush from "../assets/BrushBottom.png";
import Med5Detour from "../assets/Medecins/Med5Detour.png";
import "../components/Header1.scss";


function Header1() {
  return (
    <>   
    < Navbar />
    <div className="contenairHeader1">
      <div className="contentWrapper">
        <img className="Med" src={Med5Detour} alt="Médecin" />
        <h1 className="titleHeader">Doctolibo</h1>
      </div>
      <div className="emptySpace" />
      <img className="brush" src={brush} alt="brush" />
    </div>
    </>
  );
}

export default Header1;