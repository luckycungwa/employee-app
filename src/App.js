import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserForm from './comp/UserForm';
import UserInfo from './comp/UserInfo';
import UserUpdate from "./comp/UserUpdate";
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserUpdate from './comp/UserUpdate';


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
       
       {/* iNFORMATION INPUT COLLECTION */}
        <div className='section'>
            {/* <UserForm/> */}
            <UserUpdate/>
        </div>
        {/* iNFORMATION OUTPUT DISPLAY */}
        <div className='section'>
        <h1>Display Worker Info</h1>
            <UserInfo key={workers.id} workers={workers}/>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
