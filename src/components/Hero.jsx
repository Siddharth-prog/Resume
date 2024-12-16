import React ,{ useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faLinkSlash, faRandom } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <header className="hero-section">
      <div className="profile-photo">
        <img src="./src/assets/dp.jpg" alt="Profile" />
      </div>
      <div className="content">
        <h1
          
        >
          SIDDHARTH GUPTA
        </h1>
        
            
          </div>
        
        <a href="/path-to-your-resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
          Download Resume <FontAwesomeIcon icon={faLink} /> 
        </a>
      
    </header>
  )
}

export default HeroSection

