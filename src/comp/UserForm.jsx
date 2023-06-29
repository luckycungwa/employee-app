import React from "react";
import { useState } from "react";
// for data management with json server
import axios from "axios";
// importing my user details component
import UserInfo from "./UserInfo";

const UserForm = ({ workerId }) => {
  // Iniialise form fields / states
  const defaultForm = {
    name: "",
    email: "",
    idNum: "",
    cell: "",
    position: "",
    avatar: null, // Image data will be stored as a base64 string | MIGH ADD  ADEFAULT thumbnail
  };
  const [formData, setFormData] = useState(defaultForm);
// track user input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// image upload manager
  const handleImageUpload = (e) => {
    const userFile = e.target.files[0];
    //Check if there was a file selected and it is an acceptable format
    if (userFile) {
      const reader = new FileReader();
      // Check what file was slected before we convert it string for Json (base64)
      reader.onloadend = () => {
        //set our form data
        setFormData({ ...formData, avatar: reader.result });
      };

      reader.readAsDataURL(userFile);
    };
  };
// check if the form fields are filled otherwise alert user to fill in info
  const checkFormFill = () => {
    if (!formData) {
      alert("Please Fill in the form!");       // Alert the user if they did not filll in the task
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent null submission
    checkFormFill();
    axios
      .post("http://localhost:3000/workers", formData)
      .then((response) => {
        console.log(response.data);
        setFormData(defaultForm);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="register">
    <div >
       <p className="title">Register New Employee</p>
    <br/>
    </div>
   
    <div className="cover-card">
    
      <div className="section">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label user-data">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="label user-data">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="label user-data">
            Cell:
            <input
              type="text"
              name="cell"
              value={formData.cell}
              onChange={handleInputChange}
              required
              maxLength={12}
            />
          </label>
          <label className="label user-data">
            ID No:
            <input
              type="text"
              name="idNum"
              value={formData.idNum}
              onChange={handleInputChange}
              required
              maxLength={10}
            />
          </label>
          <label className="label user-data">
            Position:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              maxLength={28}
            />
          </label>
          <label className="user-data">
            Avatar:
            <input
              type="file"
              name="avatar"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleImageUpload}
            />
          </label>
          <br />
          <br />

          <button className="cta-btn user-data" type="submit">
            Add Worker
          </button>
        </form>
        <div className="section cover">
        <img src="/000.png" alt="thumbnail bg" className="thumbnail"></img>
      </div>
      </div>
      </div>
    </div>
  );
};

export default UserForm;
