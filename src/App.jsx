import './App.css';
import CardCarousel from './components/card-carousel';
import latinDictionary from './assets/dict';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Latin Flashcards</h1>
        <p>Salvete, discipuli! Let's learn latin</p>
        <h2>Flashcards: </h2>
      </div>

      <CardCarousel cards={latinDictionary} />
    </div>
  )
}

export default App

