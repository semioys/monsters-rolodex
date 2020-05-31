import React from 'react';
import './card.styles.scss';

function Card({card}) {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${card.id}?set=set2`} alt="Monster"/>
      <h2>{ card.name }</h2>
      <p>{ card.email }</p>
    </div>
  );
}

export default Card;
