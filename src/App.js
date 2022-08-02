import React,{useState} from 'react';
import {NavBar} from './components/NavBar'
import {SearchNav} from './components/SearchNav'
import './App.css';




function App() {

  const [showSearchNav, setShowSearchNav] = useState(false)

  return (
    <div className="App">
      <NavBar showInput={setShowSearchNav}/> 
      {showSearchNav ? 
      <SearchNav closeInput={setShowSearchNav}/> : ""}
    </div>
  );
}

export default App;
