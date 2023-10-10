import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
export default function Navbar()  {

  const path = useLocation().pathname;
  
  return (
    <nav className='nav-container'>
      <Link to='/' className='links-main'>
        <h3
          className={`h3-nav ${path === '/' ? 'active' : ''}`}>
              Feed</h3>
      </Link>
      <Link to='/about' className='links-main'>
        <h3 
          className={`h3-nav ${path === '/about' ? 'active' : ''}`} >
                Sobre mim
        </h3>
      </Link>
      <Link to='/projects' className='links-main'>
        <h3 
          className={`h3-nav ${path === '/projects' ? 'active' : ''}`}>
                Projetos
        </h3>
      </Link>
      <Link to='/contact' className='links-main'>
        <h3 
          className={`h3-nav ${path === '/contact' ? 'active' : ''}`}>
              Contato
        </h3>
      </Link>
    </nav>
  );
}
