import { useState, useEffect } from 'react';
import Pokemon from './Pokemon.js';

export default function Pokedex(){
  const [posts, setPosts] = useState([]);


  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);


  const pokeList = posts.results?.map(pokemon =>
    <Pokemon
        name={pokemon.name}
        url={pokemon.url}
    />
  )

  return (
    <div>
      {pokeList}
    </div>
  );
}