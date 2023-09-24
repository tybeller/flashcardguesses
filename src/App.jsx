import './App.css';
import CardCarousel from './components/card-carousel';
import latinDictionary from './assets/dict';
import columnImg from './assets/columns.png'

const App = () => {
  const cardCount = latinDictionary.length;

  return (
    <div className="App">
      <div className="header">
        <h1>Latin Flashcards</h1>
        <p>Salvete, discipuli! Let's learn latin</p>
        <h2>Flashcards: {cardCount}</h2>
      </div>

      <CardCarousel cards={latinDictionary} />

      <div className="cols">
        <img src={columnImg} alt="column" />
        <img src={columnImg} alt="column" />
      </div>
    </div>
  )
}

export default App

