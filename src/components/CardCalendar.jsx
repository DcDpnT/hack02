import Calendar from "./Calendar"
import leverSoleil from "../assets/leversoleil.png"
import pain from "../assets/pain.png"
import poulet from "../assets/poulet.png"
import soleil from "../assets/soleil.png"
import soleilCouchant from "../assets/soleil_couchant.png"
import './CardCalendar.scss';
import { useState } from "react"


const CardCalendar=()=>{

const [selectedHour, setSelectedHour] = useState(null);

const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

const generateHours = () => {
    const hours = [leverSoleil, pain, poulet, soleil,soleilCouchant]; 

    return hours.map((hour, index) => (
      <img
        key={index}
        src={hour}
        alt={`Hour ${index}`}
        className={`hour ${selectedHour === hour ? 'selected' : ''}`}
        onClick={() => handleHourClick(hour)}
      />
    ));
  };

    return(
        <div className="boxCalendar">
            <Calendar/>
            <div className="boxHour">
                {generateHours()}
            </div>
        </div>
    )

}

export default CardCalendar;