import { useState, useEffect } from 'react';
import PokeImage from './PokeImage.js';
import './PokeEvolutions.css';

export default function PokeEvolutions( {poke} ){
    const [evolutions, setEvolutions] = useState();

    const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + poke.data?.name;
    
    useEffect(() => {
        fetch(speciesUrl)
          .then((response) => response.json())
          .then((data) => {
            return fetch(data.evolution_chain.url);
          })
          .then((response) => response.json())
          .then((data) => {
            setEvolutions(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, [speciesUrl]);

    let chain = evolutions?.chain;

    const evoChain = [];

    while(chain !== [] && chain !== undefined){
        if(chain.evolution_details == []){
            console.log(chain.species);
        }
        evoChain.push({
            name: chain.species.name,
            url: chain.species.url,
            evolution_method: '',
            evolution_level: ''
        })
        console.log(chain);

        chain = chain.evolves_to[0];
    }

    let ret = [];

    for(let i = 0; i < evoChain.length; i++){
        const splitUrl = evoChain[i].url.split("/");
        const id = splitUrl[6];
        ret.push(<PokeImage id={id}/>)  
    }

    return ret;
}