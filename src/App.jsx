// import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import './index.css';

import MyRouter from './router/index.jsx';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
 
  return (
  <div>  
    <div>
      <Navbar />

      <MyRouter />

    </div>

    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>
      </div> 
    </div>

  </div>  
  );
}

export default App;

