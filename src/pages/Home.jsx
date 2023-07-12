import { useState, useEffect } from "react";
import axios from "axios";

import "./Home.scss";

function Home() {
    const [home, setHome] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4242/api/symptomes").then((response) => {
          console.info(response.data);
          setHome(response.data);
        });
      }, []);

    return (
        <p>Page Home</p>
    )
    }
    
    export default Home