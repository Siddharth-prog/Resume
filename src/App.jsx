import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/Hero.jsx'
import Card from './components/Card.jsx'

import Academic from './components/Academic.jsx'
function App() {
  

  return (
    
      <div>
        <Navbar></Navbar>
        <HeroSection/>
        <h1 >Skills</h1>
       <span><Card head = "Data Structures And Algorithm"  
        description ="I have acquired proficiency in Data Structurce and Algorithms.
        I h =ave complete knowledge about array , queue , stack"></Card>
        <Card head="React" description="I am proficient in React based web development .
        I have knowledge about react-hooks and React-DOM ."></Card>

        <Card head="Computer Science Fundamentals" description="I have acquired a in depth knowlwdge of CS Fundamentals like Operating System .
       "></Card>

        <Card head="NodeJS" description="I am enhancing my skils over backend development to serve for a full-stack developer role ."></Card>
        </span>
       
       <h2>Academics</h2>
       <span><Academic head ='High School' description= 'I my completed my Secondary School from ST. Marys Convent School  and secured 97.33% aggregate .'></Academic>
       <Academic head='Senior Secondary School' description='I have completed my Senior Secondary School from Aryan International School from PCM stream and secured 93.2% aggregate .'></Academic>
       <Academic head='Undergraduate' description='I am pursuing Bachelors of Technology from
       Motilal Nehru National In stitute of Technology , Allahabad .
       I am from batch 2027 and have current CPI as 9.02 .' ></Academic>
       </span>
       <Footer></Footer>

       </div>
    
  )
}

export default App
