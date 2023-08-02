
import { Link } from 'react-router-dom';

import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

function SearchBar(){

    return (
        <div className="input-wrapper">;
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." />
        </div>   
    );
}

export default SearchBar;