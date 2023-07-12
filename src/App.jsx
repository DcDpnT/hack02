import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Medecins from "./pages/Medecins";
import MedecinDetails from "./pages/MedecinDetails";
import Forum from "./pages/Forum";
import './App.scss'


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/symptomes" element={<Medecins />} />
      <Route path="/api/symptomes/:id" element={<MedecinDetails />} />
      <Route path="/forum" element={<Forum/>} />
      <Route path="/api/medecins" element={<Medecins />} />
      <Route path="/api/medecins/:id" element={<MedecinDetails />} />
     </Routes>
    </>
  )
}

export default App
