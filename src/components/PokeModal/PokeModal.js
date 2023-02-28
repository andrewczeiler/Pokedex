import React from 'react';
import './PokeModal.css';

export default function PokeModal( {pokeClick, poke} ){
    return (
        <div className="modalWrapper" onClick={pokeClick}>
            <div className="modalContent">
                <div className="pokeName">
                    {poke.data?.name}
                </div>
                <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.data?.id}.png`} alt="Pokemon Sprite Missing RIP"/>
            </div>
        </div>
    );
}