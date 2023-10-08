import './App.css';
import CardCarousel from './components/card-carousel';
import latinDictionary from './assets/dict';
import columnImg from './assets/columns.png'
import Form from './components/form/form';
import { useState } from 'react';

const App = () => {
  const cardCount = latinDictionary.length;

  const [cardWord, setCardWord] = useState('');

  const handleGuess = (guess) => {
    console.log(guess);
  }

  const handleCardWord = (cardWord) => {
    setCardWord(cardWord)
  }

  return (
    <div className="App">
      <div className="cols">
        <img src={columnImg} alt="column" />
        <img src={columnImg} alt="column" />
      </div>

      <div className="header">
        <h1>Latin Flashcards</h1>
        <p>Salvete, discipuli! Let's learn latin</p>
        <h2>Flashcards: {cardCount}</h2>
      </div>

      <CardCarousel cards={latinDictionary} cardWord={handleCardWord}/>

      <Form onSubmit={handleGuess} cardWord={cardWord}/>

    </div>
  )
}

export default App

