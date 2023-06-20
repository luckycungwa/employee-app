import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
            
              <li className="navLinks">
              <NavLink to="/Home">
                Home
              </NavLink>
              </li>

              <li className="navLinks">
              <NavLink to="/UserForm">
                Register
              </NavLink>
              </li>
              <li className="navLinks">
              <NavLink to="/UserInfo">
                Dashboard
              </NavLink>
              </li>

              <li className="navLinks">
              <NavLink to="/UserUpdate">
                Update
              </NavLink>
              </li>
              
          </div>
  );
};

export default Navbar;
