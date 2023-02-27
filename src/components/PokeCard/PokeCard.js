import './PokeCard.css';
import { types } from '../PokeType/Types.js';

export default function PokeCard( {pokeClick, poke} ){
  let color = "white";

  for(let i = 0; i < types.length; i++){
    if(types[i].name === poke.data?.types[0].type.name){
      color = types[i].color;
    }
  }

  return(
      <div className="pokemonClass" style={{backgroundColor: color}} onClick={pokeClick}>
        <div className="pokemonNumber">
          {'#' + poke.data?.id}
        </div>
        <img className="pokemonImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.data?.id}.png`} alt="Pokemon Sprite Missing RIP"/>
        <div className="pokemonName">
          {poke.data?.name}
        </div>
      </div>
    )
}
