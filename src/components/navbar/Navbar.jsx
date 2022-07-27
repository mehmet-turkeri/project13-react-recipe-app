import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import Nav, {Nava, Logo} from './NavbarStyles'



const Navbar = () => {

    
  return (
    <Nav>
        <Logo> 
        <Link to="/home" style={{textDecoration:"none", cursor:'pointer'}}>

        {"<CLARUSWAY-MEHMET/>"} <span>RECIPE</span>
        </Link>
        </Logo>
        <div>
        <NavLink style={{textDecoration:"none"}} to="/About" >ABOUT</NavLink>
        <Nava href="https://github.com/mehmet-turkeri">GITHUB</Nava>
        <NavLink style={{textDecoration:"none", marginRight:"2rem"}} to="/">LOGOUT</NavLink>
        </div>
    </Nav>
  )
}

export default Navbar