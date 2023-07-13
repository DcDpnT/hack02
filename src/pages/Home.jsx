
import {useState, useEffect,} from "react"
import { useNavigate } from "react-router-dom";

import TableauHome from "../components/TableauHome";
import CarteDeFrance from "../assets/CarteDeFrance.png"
import axios from "axios";
import "./Home.scss";

function Home() {
const [dataMaladies, setDataMaladies] = useState([]);
    const [dataMedecins, setDataMedecins] = useState([]);
    const [selectedSymptomes, setSelectedSymptomes] = useState([]);
    const [filteredMedecins, setFilteredMedecins] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");  // Add this line
    const [possibleMaladies, setPossibleMaladies] = useState([]);
    const [symptomes, setSymptomes] = useState(TableauHome);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:4242/api/maladies").then((response) => {
          console.info(response.data);
          setDataMaladies(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:4242/api/medecins").then((response) => {
          console.info(response.data);
          setDataMedecins(response.data);
        });
    }, []);

    const handleImageClick = (symptome) => {
        const presenceSymptome = selectedSymptomes.includes(symptome);
        console.log("presenceSymptome",presenceSymptome);
        if(presenceSymptome){
            const newSelectedSymptomes = selectedSymptomes.filter(item => item !== symptome);
            setSelectedSymptomes(newSelectedSymptomes);
        } else {
            setSelectedSymptomes((oldSymptomes) => [...oldSymptomes, symptome]);
        }
        
        setSymptomes((ancienEtat) =>
        ancienEtat.map((item) =>
            item.symptomes === symptome
                ? { ...item, selected: !item.selected }
                : item
        )
    );
    }
    const handleCityClick = (city) => {  // Add this function
        setSelectedCity(city);
    }
    const handleSelectionClick = () => {
        if (selectedSymptomes.length === 0) {
            return;
        }
        const maladies = dataMaladies.filter((maladie) => 
            selectedSymptomes.some((symptome) => maladie.symptomes.includes(symptome))
        ).map((maladie) => maladie.nom);
        setPossibleMaladies(maladies);  
        if (maladies.length > 0) {
            const medecins = dataMedecins.filter((medecin) => 
                maladies.every((maladie) => medecin.maladies.includes(maladie)) && medecin.lieu === selectedCity  // Add city filter here
            );
            setFilteredMedecins(medecins);
        }
    }
    useEffect(()=> {
        console.log(selectedSymptomes);
    },[selectedSymptomes])

    const handleClickToMedecins = () => {
        navigate ( "/medecins", {state:filteredMedecins})
    }

    return (
        <div className="pageHome">

            <div className="divFranceH">
                <img className="FranceH" src={CarteDeFrance} alt="France" />
                
                <button className="ParisH" onClick={() => handleCityClick('Paris')}></button>
                <button className="LilleH" onClick={() => handleCityClick('Lille')}></button>
                <button className="MarseilleH" onClick={() => handleCityClick('Marseille')}></button>
                <button className="BrestH" onClick={() => handleCityClick('Brest')}></button>   
            
            </div>
          
            <div className="containerH">
                <div className="divPastillesHome">
                    {symptomes.map((item) => (
                        <div className={item.selected ? "divPastillesH symptome-selected"  : "divPastillesH"} key={item.id} onClick={() => handleImageClick(item.symptomes)}>
                            <img className="pastillesH" src={item.imgsrc} alt={item.symptomes}  />
                            <p className="SymptomesNameH">{item.symptomes}</p>
                        </div>
                    ))}
                </div>
                <div className="divSelectionnerButtonH">     
                    <button className="SelectionnerButtonH" onClick={handleSelectionClick}>Recherche de maladie</button>
                </div> 
                <div>
                    <p className="PhraseH">Vous êtes à {selectedCity} et vous avez possiblement {possibleMaladies.join(", ")}.</p>
                </div>  
                {filteredMedecins.map((medecin, index) => (
                    <p key={index}>{medecin.nom}</p>
                ))} 
                <div className = "divButtonMedecinsH">
                    
                        <button className ="ButtonMedecinsH" onClick={handleClickToMedecins}>Voir les médecins</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
