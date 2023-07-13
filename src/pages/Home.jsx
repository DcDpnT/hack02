
import {useState, useEffect} from "react"
import TableauHome from "../components/TableauHome";
import PointMap from "../assets/PointMap.png"
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
        // const maladies = dataMaladies.filter((maladie) => 
        //     selectedSymptomes.some((symptome) => maladie.symptomes.includes(symptome))
        // ).map((maladie) => maladie.nom);

        // const maladies = dataMaladies.filter((maladie) =>
        //     selectedSymptomes.some((symptome) =>
        //     maladie.symptomes.some((maladieSymptome) =>
        //     maladieSymptome.includes(symptome))
        // )).map((maladie) => maladie.nom); //ajout de la possibilité d'inclure la maladie qui contient un symptome "toux seche" si le symptome est "toux"
        // setPossibleMaladies(maladies);  

        // const maladies = dataMaladies.filter((maladie) =>
        //     selectedSymptomes.every((symptome) =>
        //     maladie.symptomes.some((maladieSymptome) =>
        //     maladieSymptome.includes(symptome))
        //     )).map((maladie) => maladie.nom);  //avec cette version, il faut aussi que la maladie contienne tous les symptomes pour être sélectionnee

        const maladies = dataMaladies.filter((maladie) => {
            const nonMatchingSymptoms = selectedSymptomes.filter(
                (symptome) =>
                    !maladie.symptomes.some((maladieSymptome) =>
                        maladieSymptome.includes(symptome)
                    )
            );
            return (
                nonMatchingSymptoms.length <= 2 &&
                selectedSymptomes.some((symptome) =>
                    maladie.symptomes.some((maladieSymptome) =>
                        maladieSymptome.includes(symptome)
                    )
                )
            );
        }).map((maladie) => maladie.nom); 
        //avec cette version on sélectionne quand même une maladie s'il selectedSymptomes de contient pas plus de 2 symptomes
        // qu'il n'y a pas dans maladie.symptome. Il faut quand même que la maladie contienne au moins un des symptomes de selectedSymptome

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
                    <button className="SelectionnerButtonH" onClick={handleSelectionClick}>Sélectionner</button>
                </div> 
                <div>
                    <p className="PhraseH">Vous êtes à {selectedCity} et vous avez possiblement {possibleMaladies.join(", ")}.</p>
                </div>  
                {filteredMedecins.map((medecin, index) => (
                    <p key={index}>{medecin.nom}</p>
                ))}
               
            </div>
        </div>
    );
}

export default Home;
