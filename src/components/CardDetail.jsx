import CardCalendar from "./CardCalendar";
import "../components/CardDetails.scss"

function CardDetail ({medecin, image}) {
    
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

					</div>
				<div className="box3">
					<CardCalendar /> 
				</div>
		</div>	
	</>
    )
}
export default CardDetail;