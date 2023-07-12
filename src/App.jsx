import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Medecins from "./pages/Medecins";
import MedecinDetails from "./pages/MedecinDetails";
import './App.css'

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/symptomes" element={<Medecins />} />
          <Route path="/api/symptomes/:id" element={<MedecinDetails />} />
        </Routes>
    </>
  )
}


export default App
