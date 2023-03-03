import './PokeEvoDesc.css';
import arrow from './arrow.png';

export default function PokeEvoDesc( {poke} ){
    function firstLetterUppercase(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function splitDashAndUppercase(string){
        let ret = '';
        const names = string.split("-");
        for(let i = 0; i < names.length; i++){
            const namePart = firstLetterUppercase(names[i]);
            ret += ' ' + namePart;
        }
        return ret;
    }

    let evoInfo = '';
    
    if(poke.min_level !== null){
        evoInfo += 'Level ' + poke.min_level;
    }
    else if(poke.min_happiness !== null){
        evoInfo += poke.min_happiness + ' Happiness';
    }
    else if(poke.min_beauty !== null){
        evoInfo += poke.min_beauty + ' Beauty';
    }
    else if(poke.min_affection !== null){
        evoInfo += poke.min_affection + ' Affection';
    }
    else if(poke.item !== null){
        evoInfo += 'Use';
        const itemName = splitDashAndUppercase(poke.item.name)
        evoInfo += itemName;
    }
    if(poke.trigger_name === "trade"){
        evoInfo += 'Trade';
        if(poke.trade_species !== null){
            const pokeName = firstLetterUppercase(poke.trade_species.name);
            evoInfo += ' with ' + pokeName;
        }
        else if(poke.held_item !== null){
            const itemName = firstLetterUppercase(poke.held_item.name)
            evoInfo += ' holding ' + itemName;
        }
    }
    if(poke.party_species !== null){
        const pokeName = firstLetterUppercase(poke.party_species.name);
        evoInfo += 'Level up with ' + pokeName + ' in party'
    }
    if(poke.location !== null){
        evoInfo += 'Level up at '
        const locationName = splitDashAndUppercase(poke.location.name)
        evoInfo += locationName;
    }
    if(poke.held_item !== null && poke.trigger_name === "level-up"){
        let itemName = splitDashAndUppercase(poke.held_item.name);
        evoInfo += 'Level up holding ' + itemName;
    }
    if(poke.time_of_day !== ""){
        evoInfo += ' during ' + poke.time_of_day;
    }
    if(poke.known_move !== null){
        const move = splitDashAndUppercase(poke.known_move.name);
        evoInfo += 'Level up with ' + move;
    }
    


    return(
        <div className="evoContainer">
            <div>
                <span className="evoDesc">{evoInfo}</span>
            </div>
            <img className="arrowPic" src={arrow} alt="Missing arrow" />
        </div>
    )
}