import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetail from "../components/CardDetail";
import "./MedecinDetails.scss";
import Header1 from "../components/Header1";
import TableauImageMedecin from "../components/TableauImageMedecin";

function MedecinDetails() {

  const { id } = useParams();
  const image=TableauImageMedecin[parseInt(id,10)-1]
  const [dataMedecin, setDataMedecin] = useState([]);   
  useEffect(() => {
  axios.get(`http://localhost:4242/api/medecins/${id}`)
  .then((response) => {
console.info(response.data);
setDataMedecin(response.data);
  });  }, []);

    return (
      <>
      <Header1/>
      <CardDetail medecin={dataMedecin} image={image}/>
      </>
    )
}
export default MedecinDetails