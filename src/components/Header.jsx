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
        <span  className='profile-icons'> icon1: Availabe -  icon2: links - icon3: birthday - icon4: joined</span>
      </div>
    </>
  );
}
