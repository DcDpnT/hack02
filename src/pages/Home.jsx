
import {useState, useEffect} from "react"
import TableauHome from "../components/TableauHome";
import axios from "axios";
import "./Home.scss";

function Home() {
    const [dataMaladies, setDataMaladies] = useState([]);
    const [dataMedecins, setDataMedecins] = useState([]);
    const [selectedSymptomes, setSelectedSymptomes] = useState([]);
    const [filteredMedecins, setFilteredMedecins] = useState([]);

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
        setSelectedSymptomes((oldSymptomes) => [...oldSymptomes, symptome]);
    }

    const handleSelectionClick = () => {
        if (selectedSymptomes.length === 0) {
            return;
        }

        const maladies = dataMaladies.filter((maladie) => 
            selectedSymptomes.some((symptome) => maladie.symptomes.includes(symptome))
        ).map((maladie) => maladie.nom);

        if (maladies.length > 0) {
            const medecins = dataMedecins.filter((medecin) => 
                maladies.every((maladie) => medecin.maladies.includes(maladie))
            );
            setFilteredMedecins(medecins);
        }
    }

    return (
        <>
            <div className="containerH">
                <div className="divPastillesHome">
                    {TableauHome.map((item) => (
                        <div className="divPastillesH" key={item.id} onClick={() => handleImageClick(item.symptomes)}>
                            <img className="pastillesH" src={item.imgsrc} alt={item.symptomes} />
                        </div>
                    ))}
                </div>
                   
                    <button onClick={handleSelectionClick}>Sélectionner</button>

                    {/* Display the names of the filtered doctors */}
                    {filteredMedecins.map((medecin, index) => (
                        <p key={index}>{medecin.nom}</p>
                    ))}
                
            </div>
        </>
    );
}

export default Home;