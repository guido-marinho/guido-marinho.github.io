import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../CSS/Home.css';

import Header from '../components/Header.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Feed from './Feed.jsx';
import Links from './Links.jsx';
import Projects from './Projects.jsx';


export default function Main() {
  const path = useLocation().pathname;

  return (
    <>
      <header className='header-home'>
        <Header />
      </header>

      
      <main className='main-home'>
        
        <div className='header-main'>
          <Link to='/' className='links-main'>
            <h3
              className={`h3-header-main ${path === '/' ? 'active' : ''}`}>
              Feed</h3>
          </Link>
          <Link to='/about' className='links-main'>
            <h3 
              className={`h3-header-main ${path === '/about' ? 'active' : ''}`} >
                Sobre mim
            </h3>
          </Link>
          <Link to='/projects' className='links-main'>
            <h3 
              className={`h3-header-main ${path === '/projects' ? 'active' : ''}`}>
                Projetos
            </h3>
          </Link>
          <Link to='/contact' className='links-main'>
            <h3 
              className={`h3-header-main ${path === '/contact' ? 'active' : ''}`}>
              Contato
            </h3>
          </Link>
        </div>
        
        {path === '/' && <Feed />}
        {path === '/links' && <Links />}
        {path === '/projects' && <Projects />}
        {path === '/about' && <About />}
        {path === '/contact' && <Contact />}
      </main>

      <footer className='footer-container'>
        <p> Guilherme Marinho © 2023</p>
      </footer>
    </>
  );
}
