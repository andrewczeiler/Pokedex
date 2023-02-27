import './PokeCard.css';

export default function PokeCard( {pokeClick, poke} ){
    return(
        <div className="pokemonClass" onClick={pokeClick}>
          <div className="pokemonNumber">
            {'#' + poke.data?.id}
          </div>
          <img className="pokemonImg" src={poke.data?.sprites.front_default} alt="Pokemon Sprite Missing RIP"/>
          <div className="pokemonName">
            {poke.data?.name}
          </div>
        </div>
      )
}