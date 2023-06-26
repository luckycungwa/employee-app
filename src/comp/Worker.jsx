import React from "react";
import UserUpdate from "./UserUpdate";
import {useHistory} from "react-router-dom";

const WorkerItem = ({ worker, onDelete }) => {
  
  // FUNCTION FOR HANDLING 'DELETION' FOR EACH ITEM LISTED
  const handleDelete = () => {
    onDelete(worker.id);
  };

  // Page Navigation
  const history = useHistory();
  const handleUpdate = () => {
    
    history.push("/UserUpdate");
  };

  return (
    <>
      {/* TABLE FOR WORKER INFORMATION DISPLAY */}
      
        
        <tbody className="profile">
          <tr >
          {/* User avata */}
          {/* <td className="user-img"></td> */}
          <td  className="avatar-thumbnail"><img className="avatar" id="avatar" alt="avatar" src={worker.avatar}/> </td>
          {/* <td><img src="./logo192.png"/> </td> */}
            <td>{worker.name}</td>
            <td>{worker.position}</td>
            <td>{worker.idNum}</td>
            <td>{worker.email}</td>
            <td>{worker.cell}</td>
            <td className="btn-area right">
            {/* BUTTONS */}
        {/* Delete the uder and the data */}
        <button className="cta-btn2" onClick={handleDelete}>
          Remove
        </button>
        {/* allow an update & edit of the user selected */}
        <button className="cta-btn2" onClick={handleUpdate}>
          Update
        </button>
            </td>
          </tr>
        </tbody>
      
    </>
  );
};

export default WorkerItem;
