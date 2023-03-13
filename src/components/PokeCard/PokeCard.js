import './PokeCard.css';
import { types } from './CardType.js';
import PokeType from '../PokeType/PokeType.js';

export default function PokeCard( {pokeClick, poke} ){
  let color = "white";

  for(let i = 0; i < types.length; i++){
    if(types[i].name === poke.data?.types[0].type.name){
      color = types[i].color;
    }
  }

  function convertID(id){
    if(id <= 9){
      return `#00${id}`;
    }
    else if(id <= 99){
      return `#0${id}`;
    }
    else{
      return `#${id}`;
    }
  }

  return(
      <div className="pokemonClass" style={{backgroundColor: color}} onClick={pokeClick}>
        <div className="pokeRow">
          <img className="pokemonImg" loading="lazy" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.data?.id}.png`} alt="Pokemon Sprite Missing RIP"/>
          <div className="pokemonNumber">
            {convertID(poke.data?.id)}
          </div>
        </div>
        <PokeType poke={poke}/>
        <div className="pokemonName">
          {poke.data?.name}
        </div>
      </div>
    )
}
