import React, {useState, useEffect} from 'react'

import './Projects.css'

import IProject from 'comom/interfaces/IProject' 
import ProjectCard from 'components/ProjectCard';

export default function Projects() {

    const [projects, setProjects] = useState<IProject[]>([]);

    
    useEffect(() =>{
        fetch('https://my-json-server.typicode.com/VitongoviskDev/portifolio-db/projects')
        .then(response => response.json())
        .then(data => {
            setProjects(data);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Veja também meu portifólio</h2>
            <div className="projects__container"> 
            {
                projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index}/>
                ))
            }
            </div>
        </section>
    )
}
