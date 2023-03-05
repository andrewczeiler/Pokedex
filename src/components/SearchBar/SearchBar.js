import './SearchBar.css';
import pokeball from './pokeball.png';
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
        <div className="searchBar">
            <input className="search" placeholder="Enter Pokemon" onChange={inputHandler} />
            <button onClick={searchPoke}>test</button>
        </div>
    )
}