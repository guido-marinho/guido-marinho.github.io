import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <header className='header-home'>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </>
  );
}
