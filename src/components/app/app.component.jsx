import React, { useState, useEffect } from 'react';
import CardList from '../../components/card-list/card-list.component';
import './app.styles.scss';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters))
  }, []);

  return (
    <div className="App">
      <CardList cards={monsters} />
    </div>
  );
}

export default App;
