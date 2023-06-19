import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// iMPORT MY RLETATED COMONENT
import WorkerItem from "./Worker";
// import UserUpdate from "./UserUpdate";

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
        {workers.map((worker) => (
          <div className="profile">
            <WorkerItem
              key={Worker.id}
              worker={worker}
              onDelete={handleDeleteWorker}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserInfo;
