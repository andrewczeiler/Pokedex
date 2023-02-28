import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return(
        <div>
            <Link className="navLink" to="/pokedex">Click to go to pokedex</Link>
        </div>
    )
}