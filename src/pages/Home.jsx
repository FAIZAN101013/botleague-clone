import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Competitions from '../components/Competitions'
import UserJourney from '../components/Journey'
import About from '../components/About'
function Home() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Competitions/>
        <UserJourney/>
        <About/>
      
    </div>
  )
}

export default Home