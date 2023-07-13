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
      <Route path="/forum" element={<Forum/>} />
      <Route path="/medecins" element={<Medecins />} />
      <Route path="/medecins/:id" element={<MedecinDetails />} />
     </Routes>
    </>
  )
}

export default App
