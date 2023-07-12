import { useState, useEffect } from "react";
import TableauHome from "./components/TableauHome";

import "./Home.scss";

function Home() {
    return (
        <div>
        {TableauHome.map((item) => (
            <div key={item.id}>
                <img src={item.imgSrc} alt={item.symptomes} />
                <p>{item.symptomes}</p>
            </div>
        ))}
    </div>
);
};
    
    export default Home