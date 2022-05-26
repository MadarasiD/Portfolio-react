import React from 'react'
import '../styles/Home.css'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="home" id="home">
        <div className="header-content d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="home-text">

                            <h4>HELLO, MY NAME IS</h4>
                            <h1>MADARASI DÁNIEL</h1>
                            <p>Frontend Developer</p>

                            <div className="home-btn">
                                <a href="#" className='btn-1'>My works</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5">
                    
                        <h1> -Frontend Developer -</h1>
                        <h4>-HTML-HyperText Markup Language</h4>
                        <h4>-CSS-Cascading Style Sheets </h4>
                        <h4>-Javascript-</h4>
                        <h4>-Bootstrap-</h4>
                   
                </div>
                </div>

            </div>
            <div className="header-social">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-social-icon">
                            <ul>
                                <li><a href="#"><i><FaGithub /></i></a></li>
                                <li><a href="#"><i><FaFacebook /></i></a></li>
                                <li><a href="#"><i><FaTwitter /></i></a></li>
                                <li><a href="#"><i><FaLinkedin /></i></a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

        
    </div>
  )
}

export default Home