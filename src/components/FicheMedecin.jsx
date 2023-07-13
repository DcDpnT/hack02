import "./FicheMedecin.scss"
import Card from "./Card.jsx";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TableauImageMedecin from "./TableauImageMedecin";
import { useLocation } from "react-router-dom";
import Header1 from "./Header1";

  function FicheMedecin() {
	
	const location = useLocation()
	const filteredMedecins = location.state
	console.log("filteredMedecins",filteredMedecins);
	const [dataMedecin, setDataMedecin] = useState([]);   
    useEffect(() => {
		axios.get("http://localhost:4242/api/medecins").then((response) => {
	console.info(response.data);
	setDataMedecin(response.data);
		});  }, []);
		
	return (
	<div className="content" >
		<Header1/>
		<body>
			{filteredMedecins ?
			filteredMedecins.map((medecin, index)=> (	
				<Card key={medecin.id} medecin={medecin} image={TableauImageMedecin[index]}/>			
			))
			:
			dataMedecin.map((medecin, index)=> (	
			<Card key={medecin.id} medecin={medecin} image={TableauImageMedecin[index]}/>			
		))}
		</body>

	</div>
	

	)
}

export default FicheMedecin;