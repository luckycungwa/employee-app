import React, { useState, useEffect } from "react";
import axios from "axios";

function UserUpdate() {
  // Initialize the information to be retrieved and editable in their states
  const defaultForm = {
    name: "",
    email: "",
    position: "",
    idNum: "",
    cell: "",
  };
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState(defaultForm);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get("http://localhost:3000/workers")
      .then((response) => {
        // Handle successful response
        const userData = response.data;
        // Update the state with the fetched user data
        setUserData(userData);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditUser = (userId) => {
    const userToEdit = userData.find((user) => user.id === userId);
    setFormData(userToEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/workers/${formData.id}`, formData)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        setFormData(defaultForm);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label className="label user-data">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="label user-data">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="label user-data">
          Cell:
          <input
            type="text"
            name="cell"
            value={formData.cell}
            onChange={handleInputChange}
          />
        </label>
        <label className="label user-data">
          ID No:
          <input
            type="text"
            name="idNum"
            value={formData.idNum}
            onChange={handleInputChange}
          />
        </label>
        <label className="label user-data">
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Might wanna change the button label back to add user! */}
        <button className="cta-btn" type="submit" onClick={handleSubmit}> Update
        </button>
      </form>
    </div>
  );
}

export default UserUpdate;
