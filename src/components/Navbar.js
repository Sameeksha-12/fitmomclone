import React,{useState} from 'react'
import "./NavbarStyles.css"
import {FaTimes,FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [color,setColor] = useState(false);
  // const changeColor = () => {
  //   if(window.scrollY >=100){
  //     setColor(true);
  //   }
  //   else{
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll",changeColor);

  return (
    // <div className={color?"header header-bg":"header"}>
     <div className = "header">
      <Link to="/">
        <h1>FitMom</h1>
      </Link>
      {/* <ul className={click?'nav-menu active':'nav-menu'}> */}
      <ul className='nav-menu'>
        <li><Link to="/Courses"><h4>Courses</h4></Link></li>
        <li><Link to ="/About"><h4>About</h4></Link></li>
        <li><Link to="/Join"><h4>Join Now</h4></Link></li>
      </ul>
      {/* <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}></FaTimes>):(<FaBars size={20} style={{color:"#fff"}}></FaBars>)}
      </div> */}
      
    </div>
  )
}

export default Navbar
