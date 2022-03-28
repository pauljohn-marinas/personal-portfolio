import Svg from './components/Svg/Svg';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import {motion} from 'framer-motion';
import { FaLinkedinIn, FaGithubAlt, FaEnvelope } from "react-icons/fa";


function App() {
  const heading = 'Hi, \nIm Paul John, \nweb developer.';
  return (
    <div className="App">
      <header>
        <Navigation/>
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
                <a className='btn btn-secondary' href="#">Download CV</a>
            </motion.div>
            <ul className="social-icons">
              <motion.li 
                initial={{y:-30,opacity:0}}
                animate={{y:0,opacity:1}}
                transition ={{duration:.8, type: 'tween',delay:2}}>
                  <a href=""><FaLinkedinIn /></a>
              </motion.li>
              <motion.li 
                initial={{y:-30,opacity:0}}
                animate={{y:0,opacity:1}}
                transition ={{duration:.8, type: 'tween',delay:2.2}} >
                  <a href=""><FaGithubAlt /></a>
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
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;

