// import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

import MyRouter from './router/index.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
 
  return (
    <div>
      <Navbar />

      <MyRouter />

    </div>
  );
}

export default App;
