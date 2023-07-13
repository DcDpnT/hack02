// import { useState, useEffect } from "react";
// import axios from "axios";
import { Navbar} from "./components/Navbar"
import FicheMedecin from "../components/FicheMedecin";
import "./Medecins.scss";

function Medecins () {
    
    // const [dataMedecin, setDataMedecin] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:4242/api/symptomes").then((response) => {
    //       console.info(response.data);
    //       setDataMedecin(response.data);
    //     });
    //   }, []);

return (
    <>
    < Navbar />
    <FicheMedecin />
    </>
    );
}

export default Medecins;