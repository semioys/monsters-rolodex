import React, { useState } from 'react';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([
    {
      id: 1,
      name: 'Dracula'
    },
    {
      id: 2,
      name: 'Hulk'
    },
    {
      id: 3,
      name: 'Mykola'
    },
  ])

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
