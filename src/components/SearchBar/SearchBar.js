import './SearchBar.css';
import pokeball from './pokeball.png';

export default function SearchBar( {setSearch} ){
    let inputHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="searchBar">
            <input className="search" placeholder="Enter Pokemon" onChange={inputHandler}/>
        </div>
    )
}