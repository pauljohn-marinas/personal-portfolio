import React from 'react'
import './ServiceCard.css'


const ServiceCard = ({ title, image, info, skills}) => {
  return (
    <div className='card'>
    <img src={image} className='card-image'/>
      <h3 className='card-title'>{title}</h3>
      <p className='card-info'>{info}</p>
      <p className='skill-heading'>Tools and Technologies that I'm using:</p>
      <p className='skills'>{skills}</p>
    </div>
  )
}

export default ServiceCard