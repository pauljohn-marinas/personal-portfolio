import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({title, image, source, url}) => {
  return (
    <div className='project-container'>
      <div className='image-container'>
        <img src={Object.values(image)[0]}/>
      </div>
      <div className="overlay-container">
        <h4>{title}</h4>
        <a href={source} target="_blank" className='btn-project'>Github</a>
        <a href={url} target="_blank" className='btn-project'>View Site</a>
      </div>
    </div>
  )
}

export default ProjectCard