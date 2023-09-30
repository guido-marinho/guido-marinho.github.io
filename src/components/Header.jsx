import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

import cover from '../images/cover.png';
import profile from '../images/profile.png';
import linkedin from '../public/linkedin.png';
import message from '../public/message.png';
import verifed from '../public/verifed.png';

export default function Header() {

  // ao clicar no button linkedin, deve abrir meu perfil no linkedin
  const handleLinkedin = () => {
    const link = 'https://www.linkedin.com/in/guilhermegattimarinho/';
    window.open(link, '_blank');
  };

  //  ao clicar no button  message, deve abrir meu wpp
  const handleWpp = () => {
    const link = 'https://wa.me/+5535999423364';
    window.open(link, '_blank');
  };
  
  return (
    <>
      <div className='cover-page'>
        <img src={ cover } alt="cover" />
      </div>

      <div className='profile-container'>
        <div className='profile-level-1'>
          <img src={ profile } alt="profile image" className='profile-image' />
          <div className='profile-buttons'>
            <button className=' message-btn'
              onClick={ handleWpp }
            >
              <img src={ message } alt="message-icon" />
            </button>
            <button 
              className='follow-btn' onClick={ handleLinkedin }>
              <img src={ linkedin } alt="linkedin-icon"  className='follow-img'/>
            </button>
          </div>
        </div>

        <div className='profile-level-2'>
          <div className="name-container">
            <h1 className='profile-name'>Guilherme Gatti Marinho</h1>
            <img src={ verifed } alt="verify-icon" className='verifed-icon'/>
          </div>
          <p className='profile-about'>Desenvolvedor Web  Full Stack</p>
        </div>
        
        <div className="profile-level-3">

          <p className='icon'> 
            <span className="material-symbols-outlined icon">
              business_center
            </span>
            Disponível
          </p>

          <p className='icon'>
            <span className="material-symbols-outlined icon">
              link
            </span>
            <Link to='/links' className='links-header'>
            /links
            </Link>
          </p>
          
          <p className='icon'>
            <span className="material-symbols-outlined icon">
              cake
            </span>
            Julho 15th
          </p>

          <p className='icon'>
            <span className="material-symbols-outlined icon">
              calendar_month
            </span>
            Ingressou 2023
          </p>

        </div>
        
      </div>
    </>
  );
}
