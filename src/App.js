import logo from "./logo.svg";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// Importing Components
import UserForm from "./comp/UserForm";
import UserInfo from "./comp/UserInfo";
import UserUpdate from "./comp/UserUpdate";
// Importing pages

//importing Router related elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./comp/Home";
import Navbar from "./comp/Navbar";

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
    <div className="mainSection">
    
<Router> 
<>
  <Navbar/>
</>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/UserForm" component={UserForm} />
        <Route path="/UserInfo">
        <UserInfo key={workers.id} workers={workers}/>
        </Route>
        <Route path="/UserUpdate" component={UserUpdate} />
      </Switch>
    </Router>
  
    </div>
  );
}

export default App;
