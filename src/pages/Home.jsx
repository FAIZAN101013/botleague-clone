import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Competitions from '../components/Competitions'
import UserJourney from '../components/Journey'
import About from '../components/About'
import Disciplines from "../components/Disciplines";
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Competitions/>
        <UserJourney/>
        <About/>
        <Disciplines/>
        <Benefits/>
        <Footer/>
     
      
    </div>
  )
}

export default Home