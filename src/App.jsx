
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import './index.css';

import MyRouter from './router/index.jsx';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResultsList from './components/SearchResultsList.jsx';


function App() {

  const [results, setResults] = useState([]); 

  return (
  <div>  
    <div>
      <Navbar />

      <MyRouter />

    </div>

    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div> 
    </div>

  </div>  
  );
}

export default App;

