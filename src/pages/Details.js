import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FruitDetails from '../components/FruitDetails';


const Details = () => {
  const [fruit, setFruit] = useState({});
  const { fruitId } = useParams();

  useEffect(() => {    
    fetch(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/${fruitId}`)
    .then(response => response.json())
    .then(data => setFruit(data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <FruitDetails fruit={fruit} />
      <Footer />
    </>
  );
}

export default Details;
