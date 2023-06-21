import React from "react";
import { useEffect, useState } from "react";
// Server Element
import axios from "axios";
// iMPORT MY RLETATED COMONENT
import WorkerItem from "./Worker";
// import UserUpdate from "./UserUpdate";

const UserInfo = () => {
  //Display my data pulled from the server (workers.json)
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/workers")
      .then((response) => {
        // Handle successful response
        setWorkers(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  // Handle Delete & Update
  // Delete function over here
  const handleDeleteWorker = (workerId) => {
    axios
      .delete(`http://localhost:3000/workers/${workerId}`)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // Remove the deleted worker from the list
        setWorkers(workers.filter((worker) => worker.id !== workerId));
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <>
      <div className="user-section">
        {/* CALL THE USERiTEM COMONENT TO ACCESS & MANIPULATE THE DATA */}
        <h1>EMPLOYEES</h1>
        {/* TABLE FOR WORKER INFORMATION DISPLAY */}
        <table class="user-table">
       
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Position</th>
              <th>ID</th>
              <th>Email</th>
              <th>Cellphone</th>
              <th >
              <div className="searchbar right">
              <img className="icon" src="./search-icon.png" alt="seacrh"/>
                <input type="text" className="searchbar" placeholder="Find employee.."/> 
              
              </div>
              
              </th>
            </tr>
          </thead>

          {/* table components for users from the database */}
          {workers.map((worker) => (
                          <WorkerItem
                key={Worker.id}
                worker={worker}
                onDelete={handleDeleteWorker}
              />
          ))}
        </table>
      </div>
    </>
  );
};

export default UserInfo;
