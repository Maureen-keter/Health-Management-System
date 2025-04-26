import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink for active link
import logo from "../assets/TB.png";
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  function toggleNavbar() {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/add-client" activeClassName="active">New Client</NavLink>
          <NavLink to="/enroll" activeClassName="active">Enroll client</NavLink>
        </div>
      </div>
      <div className="rightSide">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/add-client" activeClassName="active">New Client</NavLink>
          <NavLink to="/enroll" activeClassName="active">Enroll client</NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
