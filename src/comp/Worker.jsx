import React from "react";
import UserUpdate from "./UserUpdate";
import {useHistory} from "react-router-dom";

const WorkerItem = ({ worker, onDelete }) => {
  
  // FUNCTION FOR HANDLING 'DELETION' FOR EACH ITEM LISTED
  const handleDelete = () => {
    onDelete(worker.id);
  };

  // 
  const history = useHistory();
  const handleUpdate = () => {
    
    history.push("/UserUpdate");
  };

  return (
    <div>
      <td>{worker.name}</td>
            <td>{worker.position}</td>
            <td>{worker.idNum}</td>
            <td>{worker.email}</td>
            <td>{worker.cell}</td>
      {/* BUTTONS */}
      <div>
        {/* Delete the uder and the data */}
        <button className="cta-btn2" onClick={handleDelete}>
          -
        </button>
        {/* allow an update & edit of the user selected */}
        <button className="cta-btn2" onClick={handleUpdate}>+</button>
      </div>
    </div>
  );
};

export default WorkerItem;
