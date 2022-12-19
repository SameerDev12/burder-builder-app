import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//Importing the Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Form from './Components/Main/Form/Form';
import './App_style.css';




const App = () => {
  return (
    <div className='o-body'>
      <Router>
       <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </Router>      
    </div>
  )
}

export default App