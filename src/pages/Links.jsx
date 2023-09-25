import React from 'react';
import FormEmail from '../components/FormEmail.jsx';

import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import whatsapp from '../images/whatsapp.png';
import youtube from '../images/youtube.png';
export default function Links() {
  return (
    <>
      <nav>
        <a href="https://wa.me/+5535999423364" target="_blank" rel="noopener noreferrer">
          <img src={ whatsapp } alt="whatsapp-icon" />
        </a>
        <a href="https://github.com/guilhermegattimarinho" target="_blank" rel="noopener noreferrer">
          <img src={ github } alt="whatsapp-icon" />
        </a>
        <a href="https://www.linkedin.com/in/guilhermegattimarinho/" target="_blank" rel="noopener noreferrer">
          <img src={ linkedin } alt="whatsapp-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={ youtube  } alt="whatsapp-icon" />
        </a>
      </nav>
      <section>
        <FormEmail />
      </section>
    </>
  );
}
