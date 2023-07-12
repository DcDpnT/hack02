import "./FicheMedecin.scss"
import Card from "./Card.jsx";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

  function FicheMedecin() {
	const [dataMedecin, setDataMedecin] = useState([]);   
    useEffect(() => {
		axios.get("http://localhost:4242/api/medecins").then((response) => {
	console.info(response.data);
	setDataMedecin(response.data);
		});  }, []);

	return (
	<div className="content" >
		{dataMedecin.map((medecin)=> (	
		<Card key={medecin.id} medecin={medecin}/>			
	))}

	</div>
	

	)
}

export default FicheMedecin;