import React from 'react';
import { useLocation } from 'react-router-dom';

import '../CSS/MainLayout.css';

import Links from '../pages/Links.jsx';
import Header from './Header.jsx';


export default function Main() {

  const path = useLocation().pathname;

  console.log(path);
  return (
    <>
      <header className='header-home'>
        <Header />
      </header>

      
      <main className='main-home'>
        {path === '/links' && <Links />}
        {/* {path === '/' && <Feed />} */}
        {/* {path === '/about' && <About />} */}
        {/* {path === '/projects' && <Projects />} */}
      </main>
    </>
  );
}
