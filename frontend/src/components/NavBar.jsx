import React, {useState} from 'react';
import logo from "../assets/TB.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
 
function NavBar() {
  const [openLinks, setOpenLinks]=useState(false);

  function toggleNavbar(){
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open": "close"}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/add-client">Register New Client</Link>
        <Link to="/enroll-client">Enroll A client </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/add-client">Register New Client</Link>
        <Link to="/enroll">Enroll A client </Link>
      <button onClick={toggleNavbar}>
        <ReorderIcon />
      </button>
      </div>
    </div>
  )
}

export default NavBar;