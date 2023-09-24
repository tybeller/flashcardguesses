import './card-carousel.css';
import Card from './card/card';
import { useState } from 'react';

const CardCarousel = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0);

    const handleNextCard = (val) => {
        if (currentCard + val === cards.length)
            setCurrentCard(0);
        else if (currentCard + val === -1)
            setCurrentCard(cards.length - 1);
        else{
            setCurrentCard(currentCard + val);
        }

    }

    return (
        <div className="card-carousel">
            <div className='card-holder'>
                {cards.map((card, i) => {
                    return (
                        <div key={i} className={`card-wrapper ${i === currentCard ? '' : ( i < currentCard ? 'hidden-card-after' : 'hidden-card-before')}`}>
                            <Card card={card} />
                        </div>
                    )
                })}
            </div>
            <span className='button-holder'>
                <button className='mover' onClick={() => handleNextCard(-1)}>Previous</button>
                <button className='mover' onClick={() => handleNextCard(1)}>Next</button>
            </span>
        </div>
    )
}

export default CardCarousel;