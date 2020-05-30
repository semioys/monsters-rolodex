import React from 'react';
import './card-list.styles.scss';

function CardList({ cards }) {

  return (
    <div className='card-list'>
      {
        cards.map(monster => {
          return (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        })
      }
    </div>
  );
}

export default CardList;
