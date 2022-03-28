import React from 'react'
import {motion} from 'framer-motion';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
        <motion.div 
          className="logo"
          initial={{y:-250,opacity:0}}
          animate={{y:0,opacity:1}}
          transition ={{duration:.8, type: 'tween'}}
        >
            <img src="logo.png" alt="" />
        </motion.div>
        <ul className="nav-links">
            <motion.li 
              initial={{y:-250,opacity:0}}
              animate={{y:0,opacity:1}}
              transition ={{duration:.8, type: 'tween', delay: .2}}
            >
                <a href="#">About Me</a>
            </motion.li>
            <motion.li
              initial={{y:-250,opacity:0}}
              animate={{y:0,opacity:1}}
              transition ={{duration:.8, type: 'tween', delay: .4}}
            >
                <a href="#">Projects</a>
            </motion.li>
            <motion.li 
              initial={{y:-250,opacity:0}}
              animate={{y:0,opacity:1}}
              transition ={{duration:.8, type: 'tween', delay: .6}}
            >
                <a href="#">Contact</a>
            </motion.li>
        </ul>
    </nav>
  )
}

export default Navigation