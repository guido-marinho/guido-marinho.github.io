import React from 'react';
import '../CSS/Header.css';
import cover from '../images/cover.png';
import profile from '../images/profile.png';

export default function Header() {
  return (
    <>
      <div className='cover-page'>
        {/* depois mudar para uma animação */}
        <img src={ cover } alt="cover" />
      </div>
      <div className='profile-container'>
        <div className='profile'>
          <img src={ profile } alt="profile image" className='profile-image' />
          <div className='profile-buttons'>
            <button>menssage</button>
            <button>follow</button>
          </div>
        </div>
        <h1 className='profile-name'>Guilherme Gatti Marinho</h1>
        <div className='profile-about'>
          <p>Web Developer Full Stack</p>
        </div>
        <div className="profile-icons-container ">

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
            birthday
          </p>

          <p className='icon'>
            <span className="material-symbols-outlined icon">
              calendar_month
            </span>
            joined
          </p>
        </div>
      </div>
    </>
  );
}
