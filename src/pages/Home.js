import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Fruits from '../components/Fruits';

const Home = () => {
  return(
    <>
      <Navigation />
      <Header />
      <Fruits />
      <Footer />
    </>
  );
}

export default Home;
