import './SearchBar.css';

export default function SearchBar( {setSearch} ){
    let inputHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="searchBar">
            <input className="search" placeholder="Enter Pokemon" onChange={inputHandler}/>
            <button type="submit">
                <img src="pokeball.png" alt="PokeBall pic" />
            </button>
        </div>
    )
}