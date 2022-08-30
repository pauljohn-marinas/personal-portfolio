import React from 'react'
import './Header.css'
import Svg from '../Svg/Svg';
import Navigation from '../Navigation/Navigation';
import { FaLinkedinIn, FaGithubAlt, FaEnvelope } from "react-icons/fa";
import {motion} from 'framer-motion';
import  CV from '../../assets/cv.pdf'

const Header = () => {
    const heading = `Hi, \nI'm Paul John, \nweb developer.`;
    return (
        <header>
            <Navigation />
            <div className="content">
                <div className="header-content">
                    <motion.div 
                        initial={{y:-100,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition ={{duration:1.5, delay:2.3}} 
                        className="ellipse">
                    </motion.div>
                    <motion.h1 
                        initial={{y:-100,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition ={{duration:.8, type: 'tween',delay:1.2}} 
                        style={{whiteSpace: 'pre-wrap'}}>
                        {heading}
                    </motion.h1>
                    <motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition ={{duration:1, type: 'tween',delay:1.5}}>
                        Full Stack Web Developer / Graphic Artist
                    </motion.span>
                    <motion.div 
                        initial={{y:-50,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition ={{duration:.8, type: 'tween',delay:1.8}}
                        className='cta'>
                        <a className='btn btn-primary' href="#">Hire Me</a>
                        <a className='btn btn-secondary' href={CV} download>Download CV</a>
                    </motion.div>
                    <ul className="social-icons">
                    <motion.li 
                        initial={{y:-30,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition ={{duration:.8, type: 'tween',delay:2}}>
                        <a href="https://www.linkedin.com/in/pauljohnmari%C3%B1as/" target="_blank"><FaLinkedinIn /></a>
                    </motion.li>
                    <motion.li 
                        initial={{y:-30,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition ={{duration:.8, type: 'tween',delay:2.2}} >
                        <a href="https://github.com/pauljohn-marinas" target="_blank"><FaGithubAlt /></a>
                    </motion.li>
                    <motion.li 
                        initial={{y:-30,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition ={{duration:.8, type: 'tween',delay:2.4}} >
                        <a href="mailto:paul.john.marinas@gmail.com" target="_blank"><FaEnvelope /></a>
                        </motion.li>
                    </ul>
                </div>
                <div className="header-image">
                    <Svg/>
                </div>
            </div>
        </header>
    )
}

export default Header