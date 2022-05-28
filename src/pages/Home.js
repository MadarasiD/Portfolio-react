import React from 'react'
import '../styles/Home.css'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <motion.div 
    className="home" id="home"
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}

    >
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
                                <li><a href="#"><i><FaGithub /></i><h6>Github</h6>
                                </a></li>
                                <li><a href="#"><i><FaFacebook /></i><h6>Facebook</h6></a></li>
                                <li><a href="#"><i><FaTwitter /></i><h6>Twitter</h6></a></li>
                                <li><a href="#"><i><FaLinkedin /></i><h6>LinkedIn</h6></a></li>
                                <li><a href="#"><i><FaInstagram /></i><h6>Instagram</h6></a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

        
    </motion.div>
  )
}

export default Home