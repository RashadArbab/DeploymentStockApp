import '../css/Navbar.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react'
function Navbar() {
  return (

    <AppBar className="AppBar" position="fixed" >
      <Tabs>
        <Tab href='/login' label="Login" style={{color:'white' , fontWeight: 600}}/>
        <Tab href="/register" label="Sign Up" style={{color: 'white' , fontWeight: 600}}/>
      </Tabs>
    </AppBar>

    /*
  <button class="navbar-toggler btn btn-primary" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">

    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Tab  href="/watchlist" label="Watchlist" />
      </li>
      <li class="nav-item">
        <Tab href='/login' label="Login" />
      </li>
      <li class="nav-item">
        <Tab href="/register" label="Sign Up" />
      </li>



    </ul>
  </div>

</nav>
    */




  );
} export default Navbar; 