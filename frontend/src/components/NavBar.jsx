import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from "../assets/logo.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  function toggleNavbar() {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close" }>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/add-client">New Client</NavLink>
          <NavLink to="/enroll">Enroll client</NavLink>
        </div>
      </div>
      <div className="rightSide">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/add-client">New Client</NavLink>
          <NavLink to="/enroll">Enroll client</NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
