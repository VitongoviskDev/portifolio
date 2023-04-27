import React from 'react'

import './ProjectCard.css'

import IProject from 'comom/interfaces/IProject'
import ProjectButton from 'components/ProjectButton'
import { NumericLiteral } from 'typescript'

interface ProjectCardProps{
    project: IProject,
    index: number
}

export default function ProjectCard({project, index}: ProjectCardProps) {
    const {name, image, description, code, demo, technologies} = project
  return (
    <div className={`project-card ${index%2 ? 'odd' : ''}`}>
        <div className="project__image-container">
            <img className='project__image' src={`${image}?raw=true`} alt={`projeto ${name}`} />
        </div>
        <div className="project__container">
            <div className="project__text-content">
                <h3 className="project__title">{name}</h3>
                <p className="project__description">{description}</p>
                <ul className='project__technologies'>
                {
                technologies.map((tech, index) => (
                    <li className="project__technology" key={index}>{tech}</li>
                ))
                }
                </ul>
            </div>
            <div className="project__buttons-container">
                <ProjectButton url={code}>Código</ProjectButton>
                <ProjectButton url={demo}>Visitar</ProjectButton>
            </div>
        </div>
    </div>
  )
}
