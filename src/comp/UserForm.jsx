import React from 'react';
import { useState } from 'react';
// for data management with json server
import axios from 'axios';

const UserForm = ({workerId}) => {
  // Iniialise form fields / states
  const defaultForm = {name: '', email: '', position: '', idNum: '', cell: ''};
  const [formData, setFormData] = useState(defaultForm);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post on my server at specified dir (http://localhost:3000/workers)
    axios.post(`http://localhost:3000/workers`, formData)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // Reset the form | CURRENTLY NOT WORKING
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
      <label className='label user-data'>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label className='label user-data'>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label className='label user-data'>
        Cell:
        <input type="text" name="cell" value={formData.cell} onChange={handleInputChange} />
      </label>
      <label className='label user-data'>
        ID No:
        <input type="text" name="idNum"value={formData.idNum} onChange={handleInputChange} />
      </label>
      <label className='label user-data'>
        Position:
        <input type="text" name="position" value={formData.position} onChange={handleInputChange}/>
      </label>
      <br/>
      <button className='cta-btn' type="submit">Add Worker</button>
    </form>

    </div>
  );
};

export default UserForm;
