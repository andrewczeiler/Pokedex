import './PokeType.css';
import { types } from './Types.js'


export default function PokeType( {poke} ){
    return (
        <div className="pokeTypes">
            {poke.data?.types.map((poke) => {
              const [{ name, color }] = types.filter(
                (item) => item.name === poke.type.name
              );

              return (
                <>
                    <div className="pokeType" style={{backgroundColor: color}}>
                        <span>{name}</span>
                    </div>
                </>
              );
            })}
        </div>
    )
}