import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p className="my-5 fs-3 border border-danger border-3">Name: Sheriman, Enrique giovanny imanuel<br/>NIM: 105021910088<br/>Program study: Infomatics<br/>Faculty: Computer of Science</p>
      </div>      
      <Footer />
    </>
  );
}

export default About;
