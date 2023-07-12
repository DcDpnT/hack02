import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import CardCalendar from "./CardCalendar.jsx"
import "./CardMedecin.scss"

  function CardMedecin() {
		const [dataMedecin, setDataMedecin] = useState([]);

  useEffect(() => {
        axios.get("http://localhost:4242/api/medecins").then((response) => {
          console.info(response.data);
          setDataMedecin(response.data);
        });
      }, []);

	return (
		
			<div className="wrap-container">
				{/* <img src={medecin.img} alt="image du medecin"/> */}
				{dataMedecin
				// .filter((medecin)=>
				// ) 
				.map((medecin)=> (	
					<p className="fondgris"  key={medecin.id}>
					{medecin.nom}<br/>{medecin.lieu} <Link to={`/medecin/${medecin.id}`}><button type="button"> prendre rendez-vous</ button> </Link>
					<CardCalendar /></p>
						
				))}
			</div>	
	
	

	)
}

export default CardMedecin;