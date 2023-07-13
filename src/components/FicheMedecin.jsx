import "./FicheMedecin.scss"
import Card from "./Card.jsx";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

  function FicheMedecin() {
	
	const location = useLocation()
	const filteredMedecins = location.state
	const [dataMedecin, setDataMedecin] = useState([]);   
    useEffect(() => {
		axios.get("http://localhost:4242/api/medecins").then((response) => {
	console.info(response.data);
	setDataMedecin(response.data);
		});  }, []);
		
	return (
	<div className="content" >

		{filteredMedecins ?
		filteredMedecins.map((medecin)=> (	
			<Card key={medecin.id} medecin={medecin}/>			
		))
		:
		dataMedecin.map((medecin)=> (	
		<Card key={medecin.id} medecin={medecin}/>			
	))}

	</div>
	

	)
}

export default FicheMedecin;