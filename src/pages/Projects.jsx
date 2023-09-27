import React from 'react';
import '../CSS/Projects.css';

import dataProjects from '../api/projects';

export default function Projects() {
  return (
    <ul className="ul-projects-container">
      {
        dataProjects.map((item) => (
          <li key={item.id} className="card-projects">

            <h2 className="title-projects">
              {item.title}
            </h2>
            
            <p className="tech-projects">
              Tecnologias utilizadas: <span>{item.tech}</span>
            </p>
            
            <p className="description-projects">
              {item.description}
            </p>

            <a 
              href={item.gitURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-projects"
            >
                Código fonte
            </a>
            <a 
              href={item.deployURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-projects"
            >
                Deploy da aplicação
            </a>

            <img 
              src={item.image} 
              alt={`${item.title}-image`} 
              className="projects-img"
            />

          </li>

        ))
      }
    </ul>
  );
}
