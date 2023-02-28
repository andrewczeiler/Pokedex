import { Routes, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex.js';
import './App.css';

function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Pokedex/> } />
        <Route path="/pokedex" element={ <Pokedex/> } />
      </Routes>
    </div>
  );
}


export default App;
