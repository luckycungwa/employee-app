import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = () => {
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
  const handleDelete = (workerId) => {
    axios
      .delete(`http://localhost:3000/workers/${workerId}`)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  // Info Update over here
  const handleUpdate = (workerId, updatedData) => {
    axios
      .put(`http://localhost:3000/workers/${workerId}`, updatedData)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <>
      <h1>Display Worker Info</h1>

      <div className="user-section">
          {workers.map((worker) => (
            <div className="profile">

<table class="GeneratedTable">
<thead>
<tr>
<th>Name</th>
<th>Position</th>
<th>ID</th>
<th>Email</th>
<th>Cellphone</th>
</tr>
</thead>

<tbody  key={worker.id}>
<tr>
<td>{worker.name}</td>
<td>{worker.position}</td>
<td>{worker.idNum}</td>
<td>{worker.email}</td>
<td>{worker.cell}</td>
</tr>
<tr>
<td>{worker.name}</td>
<td>{worker.position}</td>
<td>{worker.idNum}</td>
<td>{worker.email}</td>
<td>{worker.cell}</td>
</tr>


</tbody>
</table>


              {/*
              This code displays information in cards
               <div className="user-section" key={worker.id}>
                <div className="user-img"></div>
                <div className="user-info">
                  <p className="user-name"> Name: </p>
                  <p className="right"> {worker.name}</p>
                </div>

                <div className="user-info">
                  <p className="user-name"> Name: </p>
                  <p className="right"> {worker.name}</p>
                </div>
                
              </div> */}
              
              
              <div>
                <button className="cta-btn" type="submit" onClick={handleDelete}>Delete</button>
                <button className="cta-btn" type="submit" onClick={handleUpdate}>Update</button>
              </div>
              
            </div>
          ))}
      </div>
      
    </>
  );
};

export default UserInfo;
