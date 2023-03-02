import React from 'react';
import PokeEvolutions from '../PokeEvolutions/PokeEvolutions.js';
import './PokeModal.css';

export default function PokeModal( {pokeClick, poke} ){
    return (
        <div className="modalWrapper" onClick={pokeClick}>
            <div className="modalContent">
                <div className="topModalContent">
                    <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.data?.id}.png`} alt="Pokemon Sprite Missing RIP"/>
                    <div className="verticalSeperator"></div>
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
                <div className="horizontalSeperator"></div>
                <div className="pokeEvos">
                    <PokeEvolutions poke={poke} />
                </div>
            </div>
        </div>
    );
}