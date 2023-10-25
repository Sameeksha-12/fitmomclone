import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Coursesbg from "../components/coursesbg"
import Courseinfo from "../components/Courseinfo"

const Courses = () => {
  return (
    <div>
      <Navbar/>
      <Coursesbg/>
      <Courseinfo />
      <Footer />
    </div>
  )
}

export default Courses
