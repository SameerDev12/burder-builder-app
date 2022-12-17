import React from 'react';

//Importing the Components
import Header from './Components/Header/Header';
import './App_style.css';
import Main from './Components/Main/Main'


const App = () => {
  return (
    <div className='o-body'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App