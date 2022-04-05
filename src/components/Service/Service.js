import React from 'react'
import './Service.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import backend from '../../assets/database.svg'
import frontend from '../../assets/frontend.svg'
import design from '../../assets/design.svg'
const Service = () => {
  return (
    <section className='service'>
        <ServiceCard 
          title ='Designer' 
          image={design}
          info = 'I work with certain design tools to create high-fidelity designs and prototypes.'
          skills = 'Photoshop, Illustrator, Adobe XD, Figma'
        />
        <ServiceCard 
          title ='Front-end Developer' 
          image={frontend}
          info = 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.'
          skills = 'HTML, CSS, Javascript, jQuery, AJAX, SASS, Bootstrap, React JS, Redux, Material UI, Wordpress, Elementor'
        />
        <ServiceCard 
          title ='Back-end Developer' 
          image={backend}
          info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut placerat arcu.'
          skills= 'PHP, MySQL, PostgreSQL, Laravel, CodeIgniter, Git, API'
        />
    </section>
  )
}

export default Service