import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Medecins from "./pages/Medecins";
import MedecinDetails from "./pages/MedecinDetails";
import './App.scss'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/medecins" element={<Medecins />} />
      <Route path="/api/medecins/:id" element={<MedecinDetails />} />
     </Routes>
    </>
  )
}

export default App
