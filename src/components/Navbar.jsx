import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faDiagramProject, faHome, faInfo, faInfoCircle, faInstitution, faLink, faRandom } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
import './Nav.css'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="navbar">
       
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li><FontAwesomeIcon icon={faHome} /><a href="../App.jsx">Home</a></li>
          <li><FontAwesomeIcon icon={faBlog} /><a href="#about">About</a></li>
          <li><FontAwesomeIcon icon={faDiagramProject} /><a href="#projects">Projects</a></li>
          <li><FontAwesomeIcon icon={faInfoCircle} /><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar
