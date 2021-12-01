import React, { useState, useEffect } from 'react';
import FruitItem from './FruitItem';

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all')
    .then(response => response.json())
    .then(data => setFruits(data));

    // eslint-disable-next-line
  }, []);

  const  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/${text}`)
    .then(response => response.json())
    .then(data => setFruits(data.results));

    setText('');
  }

  const handleChange = (e) => {setText(e.target.value)};

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <h2>Search Fruits</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} value={text} />
          </form>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

          { fruits.map(fruit => <FruitItem key={fruit.id} fruit={fruit} />) }
              
          </div>
      </div>
  </section>
  );
}

export default Fruits;
