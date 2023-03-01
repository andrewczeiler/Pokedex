import React from 'react';
import { useState, useEffect } from 'react';
import './PokeModal.css';

export default function PokeModal( {pokeClick, poke} ){
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
            console.log(chain.species.name);
        }
        evoChain.push({
            name: chain.species.name,
            url: chain.species.url,
            evolution_method: '',
            evolution_level: ''
        })

        chain = chain.evolves_to[0];
    }

    console.log(evoChain)
    


    return (
        <div className="modalWrapper" onClick={pokeClick}>
            <div className="modalContent">
                <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.data?.id}.png`} alt="Pokemon Sprite Missing RIP"/>
                <div className="contentSeperator">
                    
                </div>
                <div className="pokeStats">
                    <div className="pokeStat">
                        <div className="statLabel">
                            {"HP: " + poke.data?.stats[0].base_stat}
                        </div>
                        <div className="statBar">
                            <div style={{width: Math.min(poke.data?.stats[0].base_stat / 1.5, 100) + "%"}}></div>
                        </div>
                    </div>
                    <div className="pokeStat">
                        <div className="statLabel">
                            {"Attack: " + poke.data?.stats[1].base_stat}
                        </div>
                        <div className="statBar">
                            <div style={{width: Math.min(poke.data?.stats[1].base_stat / 1.5, 100) + "%"}}></div>
                        </div>
                    </div>
                    <div className="pokeStat">
                        <div className="statLabel">
                            {"Defense: " + poke.data?.stats[2].base_stat}
                        </div>
                        <div className="statBar">
                            <div style={{width: Math.min(poke.data?.stats[2].base_stat / 1.5, 100) + "%"}}></div>
                        </div>
                    </div>
                    <div className="pokeStat">
                        <div className="statLabel">
                            {"Sp. Atk: " + poke.data?.stats[3].base_stat}
                        </div>
                        <div className="statBar">
                            <div style={{width: Math.min(poke.data?.stats[3].base_stat / 1.5, 100) + "%"}}></div>
                        </div>
                    </div>
                    <div className="pokeStat">
                        <div className="statLabel">
                            {"Sp. Def: " + poke.data?.stats[4].base_stat}
                        </div>
                        <div className="statBar">
                            <div style={{width: Math.min(poke.data?.stats[4].base_stat / 1.5, 100) + "%"}}></div>
                        </div>
                    </div>
                    <div className="pokeStat">
                        <div className="statLabel">
                            {"Speed: " + poke.data?.stats[5].base_stat}
                        </div>
                        <div className="statBar">
                            <div style={{width: Math.min(poke.data?.stats[5].base_stat / 1.5, 100) + "%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}