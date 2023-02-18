import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard/PokeCard.js';
import PokeInfo from './PokeInfo/PokeInfo.js';

export default function Pokemon({ name, url }){
    const [poke, setPoke] = useState([]);

    const [switchPoke, setSwitchPoke] = useState(false);

    useEffect(() => {
      const callFetch = async () => {
        const pokemonData = await axios.get(url);
        setPoke(pokemonData);
      }
      callFetch().catch(console.error);
    }, [url]);

    console.log(poke);

    function pokeClick(){
      setSwitchPoke(!switchPoke);
    }

    if (!switchPoke) {
      return(
        <PokeCard pokeClick={pokeClick} poke={poke}/>
      )
    }
    else {
      return(
        <PokeInfo pokeClick={pokeClick} poke={poke}/>
      )
    }
}