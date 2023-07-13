import CardCalendar from "./CardCalendar";
import "../components/CardDetails.scss"

function CardDetail ({medecin, image}) {
    
    return (
	<>		
		<div className="container">
					<div className="Medecins">
							<div className="photos">
									<img src={image} alt= "medecin" />
						    </div>
						<div className="box6">
						{medecin.nom}<br/>{medecin.lieu}
                            <p>Spécialité : {medecin.spécialité}</p>
                            <p>{medecin.description}</p>
                        </div> 
					</div>
				<div className="box7">
					<CardCalendar /> 
				</div>
		</div>	
	</>
    )
}
export default CardDetail;