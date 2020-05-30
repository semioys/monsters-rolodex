import React, { useState, useEffect } from 'react';
import './App.styles.scss';

function App() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters))
  }, [])

  return (
    <div className="App">
      {
        monsters.map(monster => {
          return (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
