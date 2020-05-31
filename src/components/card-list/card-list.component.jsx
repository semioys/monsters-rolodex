import React from 'react';
import Card from '../../components/card/card.component';
import './card-list.styles.scss';

function CardList({ cards }) {

  return (
    <div className='card-list'>
      {
        cards.map(monster => {
          return (
            <Card key={monster.id} card={monster} />
          )
        })
      }
    </div>
  );
}

export default CardList;
