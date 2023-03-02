import './PokeEvolutions.css';

export default function PokeImage( {id} ){
    return(
        <img className="pokeImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`} alt={'Missing sprite for id ' + id}/>
    )
}