import './card.css';
import { useState } from 'react';

const Card = ({ card }) => {
  const { word, definition } = card;
  const [isFlipped, setIsFlipped] = useState(false);
  

  return (
    <div className="card">
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-front">
          <h1 className='card-title'>{word}</h1>
        </div>
        <div className="card-back">
          <p className="card-definition"><b><i>Def: </i></b>{definition}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;