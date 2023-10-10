import PropTypes from 'prop-types';
import React from 'react';
import '../CSS/Home.css';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

export default function Main({children}) {
  return (
    <>
      <Header />
      <main>
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


