// import { useState, useEffect } from "react";
// import axios from "axios";

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
    <FicheMedecin />
    </>
    );
}

export default Medecins;