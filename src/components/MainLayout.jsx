import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../CSS/MainLayout.css';

import Contact from '../pages/Contact.jsx';
import Links from '../pages/Links.jsx';
import Header from './Header.jsx';


export default function Main() {
  const path = useLocation().pathname;

  return (
    <>
      <header className='header-home'>
        <Header />
      </header>

      
      <main className='main-home'>
        <div className='header-main'>
          <Link to='/'>
            <h3>Feed</h3>
          </Link>
          <Link to='/projects'>
            <h3>Projetos</h3>
          </Link>
          <Link to='/about'>
            <h3>Sobre mim</h3>
          </Link>
          <Link to='/contact'>
            <h3>Contato</h3>
          </Link>
        </div>
        {path === '/links' && <Links />}
        {/* {path === '/' && <Feed />} */}
        {/* {path === '/about' && <About />} */}
        {/* {path === '/projects' && <Projects />} */}
        {path === '/contact' && <Contact />}
      </main>
    </>
  );
}
