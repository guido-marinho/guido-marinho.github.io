import React from 'react';
import '../CSS/Header.css';
import cover from '../images/cover.png';
import profile from '../images/profile.png';
import verifed from '../images/verifed.png';

export default function Header() {
  return (
    <>
      <div className='cover-page'>
        {/* depois mudar para uma animação */}
        <img src={ cover } alt="cover" />
      </div>

      <div className='profile-container'>
        <div className='profile-level-1'>
          <img src={ profile } alt="profile image" className='profile-image' />
          <div className='profile-buttons'>
            <button className=' message-btn'>
              mail
            </button>
            <button 
              className='follow-btn'>
                follow
            </button>
          </div>
        </div>

        <div className='profile-level-2'>
          <div className="name-container">
            <h1 className='profile-name'>Guilherme Gatti Marinho</h1>
            <img src={ verifed } alt="verify-icon" className='verifed-icon'/>
          </div>
          <p className='profile-about'>Web Developer Full Stack</p>
        </div>
        
        <div className="profile-level-3">

          <p className='icon'> 
            <span className="material-symbols-outlined icon">
              business_center
            </span>
            Availabe
          </p>

          <p className='icon'>
            <span className="material-symbols-outlined icon">
              link
            </span>
            links
          </p>
          
          <p className='icon'>
            <span className="material-symbols-outlined icon">
              cake
            </span>
            July 15th
          </p>

          <p className='icon'>
            <span className="material-symbols-outlined icon">
              calendar_month
            </span>
            Joined Feb 2023
          </p>

        </div>
        
      </div>
    </>
  );
}
