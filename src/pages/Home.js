import React from 'react'
import '../styles/Home.css'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'


const Home = () => {
  return (
    <div className="home" id="home">
        <div className="header-content d-flex align-items-center">
            <div id="parallax">

            <div className="header-shape shape-one">
                    <img src={require("../assets/HTML5.png")} alt="" />
                </div>

                <div className="header-shape shape-two">
                    <img src={require("../assets/CSS.png")} alt="" />
                </div>

                <div className="header-shape shape-three">
                    <img src={require("../assets/js.jpg")} alt="" />
                </div>

                <div className="header-shape shape-fore">
                    <img src={require("../assets/Bootstrap.png")} alt="" />
                </div>

                <div className="header-shape shape-five">
                    <img src={require("../assets/REACT.png")} alt="" />
                </div>

                <div className="header-shape shape-six">
                    <img src={require("../assets/Angular.png")} alt="" />
                </div>

                <div className="header-shape shape-seven">
                    <img src={require("../assets/Photoshop2.png")} alt="" />
                </div>

                
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="home-text">

                            <h4>HELLO, MY NAME IS</h4>
                            <h1>MADARASI DÁNIEL</h1>
                            <p>Frontend Developer</p>

                            

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
                                <li><a href="#"><i><FaGithub /></i>Github
                                </a></li>
                                <li><a href="#"><i><FaFacebook /></i>Facebook</a></li>
                                <li><a href="#"><i><FaTwitter /></i>Twitter</a></li>
                                <li><a href="#"><i><FaLinkedin /></i>LinkedIn</a></li>
                                <li><a href="#"><i><FaInstagram /></i>Instagram</a></li>
                                
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