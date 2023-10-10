import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Home.css';

export default function Navbar()  {

  const path = useLocation().pathname;
  
  return (
    <nav className='header-main'>
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
    </nav>
  );
}
