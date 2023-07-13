import { Link } from "react-router-dom"
import homeIcone from "../assets/homeIcone.png"
import "./Navbar.scss"


const Navbar = () => {
    return (
        <>
        <nav className="NavContain" alt="navigation">
            <Link to="/"><div className="logoHome" alt="home" />
            <img src= { homeIcone }></img></Link>
          <ul>
            <Link to="/medecins"><li className="Medecins" alt="medecins">Medecins</li></Link>
            <Link to="/forum"><li className="Forum" alt="forum">Forum</li></Link>
          </ul>
        
        </nav>
        </>
    )
}

export default Navbar;