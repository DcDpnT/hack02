import { Link } from "react-router-dom";
import CardCalendar from "./CardCalendar";
import "../components/Card.scss"

function Card ({medecin, image}) {
    
    return (
	<>		
		<div className="wrap-container">
					<div className="Medecin">
											<div className="photo">
													<img src={image} alt= "medecin" />
											</div>
						<div className="box1">
						{medecin.nom}<br/>{medecin.lieu}
						</div> 
						<div className="box2">
						<Link to={`/medecin/${medecin.id}`}><button type="button"> Fiche Médecin</ button></Link>
						</div>
					</div>
				<div className="box3">
					<CardCalendar /> 
				</div>
		</div>	
	</>
    )
}
export default Card;