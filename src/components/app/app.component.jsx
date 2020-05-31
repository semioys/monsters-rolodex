import React, { useState, useEffect } from 'react';
import CardList from '../../components/card-list/card-list.component';
import './app.styles.scss';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setsearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters))
  }, []);

  return (
    <div className="App">
      <input type="search" placeholder="Search monsters" onChange={ (e) => setsearchField(e.target.value) }/>
      <CardList cards={monsters} />
    </div>
  );
}

export default App;
