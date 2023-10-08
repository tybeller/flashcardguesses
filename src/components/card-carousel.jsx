import './card-carousel.css';
import Card from './card/card';
import { useState } from 'react';

const CardCarousel = ({ cards, cardWord }) => {
    const [currentCard, setCurrentCard] = useState(0);

    cardWord(cards[currentCard].word);

    const handleNextCard = (val) => {
        if (currentCard + val === cards.length)
            setCurrentCard(0);
        else if (currentCard + val === -1)
            setCurrentCard(cards.length - 1);
        else{
            setCurrentCard(currentCard + val);
        }
        cardWord(cards[currentCard].word);
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