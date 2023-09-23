import './App.css';
import Card from './components/card/card'

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Latin Flashcards</h1>
        <p>Salvete, discipuli! Let's learn latin</p>
        <h2>Flashcards: </h2>
      </div>

      <Card card={{ word: 'Salve', definition: 'Hello' }} />


    </div>
  )
}

export default App

