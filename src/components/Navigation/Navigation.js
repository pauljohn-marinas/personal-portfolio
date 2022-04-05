import React, {useState} from 'react'
import {motion} from 'framer-motion'
import logo from '../../assets/logo.png'
import './Navigation.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navigation = () => {
  const [active,setActive] = useState(false); 
  return (
    <nav>
        <motion.div 
          className="logo"
          initial={{y:-250,opacity:0}}
          animate={{y:0,opacity:1}}
          transition ={{duration:.8, type: 'tween'}}
        >
          <a href='https://pjmdev.com/'>
            <img src={logo} alt="Portfolio Logo" />
          </a>
        </motion.div>
        <ul className="nav-links">
            <motion.li 
              initial={{y:-250,opacity:0}}
              animate={{y:0,opacity:1}}
              transition ={{duration:.8, type: 'tween', delay: .2}}
            >
                <a href="#about">About</a>
            </motion.li>
            <motion.li
              initial={{y:-250,opacity:0}}
              animate={{y:0,opacity:1}}
              transition ={{duration:.8, type: 'tween', delay: .4}}
            >
                <a href="#projects">Projects</a>
            </motion.li>
            <motion.li 
              initial={{y:-250,opacity:0}}
              animate={{y:0,opacity:1}}
              transition ={{duration:.8, type: 'tween', delay: .6}}
            >
                <a href="#contact">Contact</a>
            </motion.li>
        </ul>
        <div className="navbar-sm">
          <GiHamburgerMenu onClick={() => setActive((isActive) => !isActive)} size={30} color='#452BC7' className='hamburger-bar'/>
          <ul className='nav-links-sm' style={ { display: active ? 'block' : 'none' } }>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
    </nav>
  )
}

export default Navigation