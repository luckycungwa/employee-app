import React from "react";
import UserUpdate from "./UserUpdate";

const WorkerItem = ({ worker, onDelete }) => {
  
  // FUNCTION FOR HANDLING 'DELETION' FOR EACH ITEM LISTED
  const handleDelete = () => {
    onDelete(worker.id);
  };


  return (
    <div>
      {/* TABLE FOR WORKER INFORMATION DISPLAY */}
      <table class="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>ID</th>
            <th>Email</th>
            <th>Cellphone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{worker.name}</td>
            <td>{worker.position}</td>
            <td>{worker.idNum}</td>
            <td>{worker.email}</td>
            <td>{worker.cell}</td>
          </tr>
        </tbody>
      </table>
      {/* BUTTONS */}
      <div>
        {/* Delete the uder and the data */}
        <button className="cta-btn" onClick={handleDelete}>
          Delete
        </button>
        {/* allow an update & edit of the user selected */}
        <button className="cta-btn">Update</button>
      </div>
    </div>
  );
};

export default WorkerItem;
