import React from 'react'
import './Project.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import proj1 from '../../assets/project1.jpg'
import proj2 from '../../assets/project2.jpg'
import proj3 from '../../assets/project3.jpg'
import proj4 from '../../assets/project4.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pokedex',
      image: {proj1},
      url: 'https://react-pokedex-d5a6a.web.app/',
      source: 'https://github.com/pauljohn-marinas/react-pokedex'
    },
    {
      id: 2,
      title: 'Chat App',
      image: {proj2},
      url: '#',
      source: 'https://github.com/pauljohn-marinas/react-chat-app'
    },
    {
      id: 3,
      title: 'Aniview',
      image: {proj3},
      url: 'https://toplevelvideo.com/',
      source: null
    },
    {
      id: 3,
      title: 'Cryptoverse',
      image: {proj4},
      url: '#',
      source: 'https://github.com/pauljohn-marinas/crypto-app'
    }
  ];
  return (
    <section id='projects' className='project'>
      <h2 className='project-heading'>Projects</h2>
      <div className="container">
        {projects.map((project) => {
          return (
            <ProjectCard key = {project.id} title = {project.title} image = {project.image} url = {project.url} source = {project.source}/>  
          )
        })}
      </div>
    </section>
  )
}

export default Projects