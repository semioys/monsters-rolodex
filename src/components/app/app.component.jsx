import React, { useState, useEffect } from 'react';
import CardList from '../../components/card-list/card-list.component';
import SearchBox from '../../components/search-box/search-box.component';
import './app.styles.scss';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setsearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters))
  }, []);

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <SearchBox placeholder={'Search monsters'} handleChange={(e) => setsearchField(e.target.value)} />
      <CardList cards={filteredMonsters} />
    </div>
  );
}

export default App;
