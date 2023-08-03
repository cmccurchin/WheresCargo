import React from "react";
import { Link } from 'react-router-dom';
import { SearchResult } from "./SearchResult.jsx";


import './SearchResultsList.css';
import './SearchResult.jsx';

// export const SearchResultsList = ({ results }) => {
//     return (
//         <div className="results-list">
//             {results.map((result, id) => {
//                 return <div key={id}>{result.name}</div>;
//             })}
//         </div>
//     );
// };


function SearchResultsList({ results }){
    return(
     <div className="results-list">
       {results.map((result, id) => {
        return (
            <SearchResult result={result} key={id} />
        )
        // return <div key={id}>{result.name}</div>;
       })}

    </div>
    );
}

export default SearchResultsList;