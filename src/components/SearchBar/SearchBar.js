import './SearchBar.css';
import icon from './icon.png';
import { useState } from 'react';

export default function SearchBar( {setSearch} ){
    const [searchParam, setSearchParam] = useState('');

    let inputHandler = (e) => {
        setSearchParam(e.target.value);
    }

    function searchPoke(){
        setSearch(searchParam);
    }

    return (
        <div className="search">
            <input className="searchBar" placeholder="Enter Pokemon..." onChange={inputHandler} />
            <button className="searchButton" onClick={searchPoke}>
                <img className="searchImg" src={icon} alt="Pokeball sprite" />
            </button>
        </div>
    )
}