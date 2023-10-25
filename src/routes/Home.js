import React from 'react'
import Navbar from "../components/Navbar"
import Homebg from '../components/Homebg'
import Who from '../components/Who'
import Footprint from '../components/Footprint'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Homebg />
      <Who/>
      <Footprint />
      <Footer />
    </div>
  )
}

export default Home
