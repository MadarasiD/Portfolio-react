import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Nav  from 'react-bootstrap/Nav'
import '../styles/Navbar.css'



const Navbar = () => {

    
  return (
    <header className="header-area">

        <Nav className="navbar navbar-expand-lg fixed-top" >
            <div className="container" >

                <a href="Home" className="navbar-brand">Madarasi Dániel <br />Frontend Developer</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

                  <i className='fas fa-bars'></i>

                </button>

                

                <div className="justify-content-end" id="collapsibleNavbar">

                

                    <ul className="navbar-nav" >

                        

                        <li className="nav-item">
                            <a href="Home" className='nav-link' activeSytle>Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="Skills" className='nav-link'>Skills</a>
                        </li>

                        <li className="nav-item">
                            <a href="About" className='nav-link'>About Me</a>
                        </li>

                        <li className="nav-item">
                            <a href="Portfolio" className='nav-link'>Portfolio</a>
                        </li>

                        <li className="nav-item">
                            <a href="Contact" className='nav-link'>Contact</a>
                        </li>

                       
                        
                    </ul>

                    
                    

                </div>

            </div>

        </Nav>

    </header>
  )
}

export default Navbar