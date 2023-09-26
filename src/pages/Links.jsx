import React from 'react';

import '../CSS/Links.css';

import github from '../public/github.png';
import instagram from '../public/instagram.png';
import linkedin from '../public/linkedin.png';
import twitter from '../public/twitter.png';
import whatsapp from '../public/whatsapp.png';
import youtube from '../public/youtube.png';
export default function Links() {
  return (
    <>
      <nav className='nav-links'>
        
        <a href="https://www.linkedin.com/in/guilhermegattimarinho/" target="_blank" rel="noopener noreferrer">
          <img src={ linkedin } alt="whatsapp-icon" />
        </a>
        
        <a href="https://github.com/guilhermegattimarinho" target="_blank" rel="noopener noreferrer">
          <img src={ github } alt="whatsapp-icon" className='github-img'/>
        </a>
        
        <a href="https://wa.me/+5535999423364" target="_blank" rel="noopener noreferrer">
          <img src={ whatsapp } alt="whatsapp-icon" />
        </a>

        <a href="https://www.youtube.com/channel/UCz1y3jdXPAIbqvDJgyZyG4w" target="_blank" rel="noopener noreferrer">
          <img src={ youtube  } alt="whatsapp-icon" />
        </a>

        <a href="https://twitter.com/guimarinho_dev" target="_blank" rel="noopener noreferrer">
          <img src={ twitter  } alt="whatsapp-icon" />
        </a>

        <a href="https://www.instagram.com/guimarinho7/" target="_blank" rel="noopener noreferrer">
          <img src={ instagram  } alt="whatsapp-icon" />
        </a>
      </nav>
    </>
  );
}
