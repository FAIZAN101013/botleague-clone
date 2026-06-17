import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Competitions from '../components/Competitions'
function Home() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Competitions/>
      
    </div>
  )
}

export default Home