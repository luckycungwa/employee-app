import React from "react";
import { useState } from "react";
// for data management with json server
import axios from "axios";

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="form-section">
      <div className="form">
        <h1>REGISTER NEW EMPLOYEE</h1>
        <br />
        <br />
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
      </div>
    </div>
  );
};

export default UserForm;
