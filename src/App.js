import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserForm from './comp/UserForm';
import UserInfo from './comp/UserInfo';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  //Display my data pulled from the server (workers.json)
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/workers')
      .then((response) => {
        // Handle successful response
        setWorkers(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <div className='section'>
            <UserForm/>
        </div>
        <div className='section'>
            <UserInfo workers={workers}/>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
