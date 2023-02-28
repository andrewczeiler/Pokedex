import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard/PokeCard.js';
import PokeModal from './PokeModal/PokeModal.js';

export default function Pokemon({ name, url }){
    const [poke, setPoke] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
      const callFetch = async () => {
        const pokemonData = await axios.get(url);
        setPoke(pokemonData);
      }
      callFetch().catch(console.error);
    }, [url]);

    function pokeClick(){
      setModal(!modal);
    }

    if(modal){
      return (
        <>
          <PokeCard pokeClick={pokeClick} poke={poke}/>
          <PokeModal pokeClick={pokeClick} poke={poke}/>
        </>
      )
    }
    else{
      return(
        <PokeCard pokeClick={pokeClick} poke={poke}/>
      )
    }
}