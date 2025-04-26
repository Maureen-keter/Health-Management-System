import React from 'react';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div className='Home'>
      <div className='headerContainer'>
        <h1>Health Programs Management System</h1>
        <p>All About Health</p>
        <Link to= "/programs">
          <button>VIEW PROGRAMS</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;