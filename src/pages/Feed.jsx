import React from 'react';
import '../CSS/Feed.css';

import dataFeed from '../api/feed';

import profile from '../images/profile.png';

export default function Feed() {
  return (
    <>
      <ul className='ul-feed-container'>
        {
          dataFeed.map((item) => (
            <li key={item.id} className='card-feed'>

              <div className="profile-feed">
                <img 
                  src={profile} 
                  alt="profile" className='profile-feed-img'
                />
                <p className='name-feed'>
                  <strong>Gui</strong> ✨
                </p>
                •
                <p className='date-feed'>
                  {item.date}
                </p>
              </div>

              <p className="feelings-feed">
                {item.feeling}
              </p>
              <div className="post-feed">
                <h2 className='title-feed'>
                  {item.title}
                </h2>

                <p className='description-feed'>
                  {item.description}
                </p>

                <img 
                  src={ item.image} 
                  alt={ item.title} 
                  className='post-feed-img'
                />
              </div>
              
            </li>
          ))
        }
      </ul>
    </>
  );
}
