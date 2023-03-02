import { useState, useEffect } from 'react';
import PokeImage from './PokeImage.js';
import PokeEvoDesc from './PokeEvoDesc.js';
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
        if(chain.evolution_details.length !== 0){
            evoChain.push({
                name: chain.species.name,
                url: chain.species.url,
                trigger_name: chain.evolution_details[0].trigger.name,
                trigger_url: chain.evolution_details[0].trigger.url,
                min_level: chain.evolution_details[0].min_level,
                gender: chain.evolution_details[0].gender,
                held_item: chain.evolution_details[0].held_item,
                item: chain.evolution_details[0].item,
                known_move: chain.evolution_details[0].known_move,
                known_move_type: chain.evolution_details[0].known_move_type,
                location: chain.evolution_details[0].location,
                min_affection: chain.evolution_details[0].min_affection,
                min_beauty: chain.evolution_details[0].min_beauty,
                min_happiness: chain.evolution_details[0].min_happiness,
                needs_overworld_rain: chain.evolution_details[0].needs_overworld_rain,
                party_species: chain.evolution_details[0].party_species,
                party_type: chain.evolution_details[0].party_type,
                relative_physical_stats: chain.evolution_details[0].relative_physical_stats,
                time_of_day: chain.evolution_details[0].time_of_day,
                trade_species: chain.evolution_details[0].trade_species,
                turn_upside_down: chain.evolution_details[0].turn_upside_down,
            })
        }
        else{
          evoChain.push({
            name: chain.species.name,
            url: chain.species.url
          })
        }

        console.log(chain)

        chain = chain.evolves_to[0];
    }

    let ret = [];

    for(let i = 0; i < ((evoChain.length * 2)-1); i++){
        if(i % 2 === 0){
            const splitUrl = evoChain[i/2].url.split("/");
            const id = splitUrl[6];
            ret.push(<PokeImage id={id}/>);
        }
        else{
          const index = Math.ceil(i/2);
          ret.push(<PokeEvoDesc poke={evoChain[index]} />)
        }
    }

    return ret;
}