import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu';
import Contacts from './Components/Contacts/Contacts';


function App() {
  return (
    <div className="App"> 
    <>
    <Home/>
    <Menu/>
    <Contacts/>
    </>
    </div>
  );
}

export default App; 

