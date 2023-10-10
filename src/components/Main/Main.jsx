import PropTypes from 'prop-types';
import React from 'react';
import './Main.css';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

export default function Main({children}) {
  return (
    <>
      <Header />
      <main className='main-container'>
        <Navbar />
        <section>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};


