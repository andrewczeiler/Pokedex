import { useState, useEffect } from 'react';
import Pokemon from './Pokemon.js';
import SearchBar from './SearchBar/SearchBar.js';
import './Pokedex.css';

export default function Pokedex(){
  const [posts, setPosts] = useState([]);

  const [tempFilter, setTempFilter] = useState([]);

  useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.results);
          setTempFilter(data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);

  const pokeList = tempFilter.map(pokemon =>
    <Pokemon
        name={pokemon.name}
        url={pokemon.url}
    />
  )

  function searchPokemon(name){
    const filterPoke = posts.filter(pokemon =>
      pokemon.name.includes(name))
    setTempFilter(filterPoke);
  }

  return (
    <div>
      <SearchBar setSearch={searchPokemon}/>
      <div className="pokedex">
        {pokeList}
      </div>
    </div>
  );
}