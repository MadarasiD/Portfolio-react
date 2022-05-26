import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { nav } from 'react-bootstrap'

const Navbar = () => {
  return (
    <header className="header-area">

        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">

                <a href="Home">Madarasi Dániel <br />Frontend Developer</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

                  <i className='fas fa-bars'></i>

                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">

                    <ul className="navbar-nav m1-auto">

                        <li className="nav-item">
                            <a href="Home" className='nav-link' active>Home</a>
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

        </nav>

    </header>
  )
}

export default Navbar