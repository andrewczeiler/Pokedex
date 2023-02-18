import './PokeInfo.css';
import PokeType from '../PokeType/PokeType.js';

export default function PokeInfo( {pokeClick, poke} ){
    return(
        <div className="pokeInfo" onClick={pokeClick}>
            <div className="leftInfo"> 
                <div className="pokemonName">
                    {poke.data?.name}
                </div>
                <img className="pokeImg" src={poke.data?.sprites.front_default} alt="Pokemon Sprite Missing RIP"/>
                <PokeType data={poke.data} />
            </div>
            <div className="middleInfo">
                <div className="pokeStat">
                    {"HP: " + poke.data?.stats[0].base_stat}
                </div>
                <div className="pokeStat">
                    {"Attack: " + poke.data?.stats[1].base_stat}
                </div>
                <div className="pokeStat">
                    {"Defense: " + poke.data?.stats[2].base_stat}
                </div>
                <div className="pokeStat">
                    {"Sp. Atk: " + poke.data?.stats[3].base_stat}
                </div>
                <div className="pokeStat">
                    {"Sp. Def: " + poke.data?.stats[4].base_stat}
                </div>
                <div className="pokeStat">
                    {"Speed: " + poke.data?.stats[5].base_stat}
                </div>
            </div>
            <div className="rightInfo">
                <div className="statBar">
                    <div style={{width: Math.min(poke.data?.stats[0].base_stat / 1.5, 100) + "%"}}></div>
                </div>
                <div className="statBar">
                    <div style={{width: Math.min(poke.data?.stats[1].base_stat / 1.5, 100) + "%"}}></div>
                </div>
                <div className="statBar">
                    <div style={{width: Math.min(poke.data?.stats[2].base_stat / 1.5, 100) + "%"}}></div>
                </div>
                <div className="statBar">
                    <div style={{width: Math.min(poke.data?.stats[3].base_stat / 1.5, 100) + "%"}}></div>
                </div>
                <div className="statBar">
                    <div style={{width: Math.min(poke.data?.stats[4].base_stat / 1.5, 100) + "%"}}></div>
                </div>
                <div className="statBar">
                    <div style={{width: Math.min(poke.data?.stats[5].base_stat / 1.5, 100) + "%"}}></div>
                </div>
            </div>
        </div>
      )
}