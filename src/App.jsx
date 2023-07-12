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
      <Route path="/medecins" element={<Medecins />} />
      <Route path="/medecins/:id" element={<MedecinDetails />} />
     </Routes>
    </>
  )
}

export default App
