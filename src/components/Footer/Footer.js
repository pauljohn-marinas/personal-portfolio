import React from 'react'
import './Footer.css'
import InvertedLogo from '../../assets/logo-invert.png'
import { FaLinkedinIn, FaGithubAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <a href='https://pjmdev.com/'><img className='footer-logo' src={InvertedLogo} alt='Portfolio logo'/></a>
        <ul className='footer-links'>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className='footer-socials'>
            <li><a href="https://www.linkedin.com/in/pauljohnmari%C3%B1as/" target="_blank"><FaLinkedinIn /></a></li>
            <li><a href="https://github.com/pauljohn-marinas" target="_blank"><FaGithubAlt /></a></li>
            <li><a href="mailto:paul.john.marinas@gmail.com" target="_blank"><FaEnvelope /></a></li>
        </ul>
    </footer>
  )
}

export default Footer