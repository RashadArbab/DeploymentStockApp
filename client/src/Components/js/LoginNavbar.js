import '../css/Navbar.css';

import React from 'react'
function Navbar() {
  return (

    <nav class="navbar navbar-transparent navbar-expand-lg" id="navbar" >


      <button class="navbar-toggler btn btn-primary" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/watchlist">Watchlist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Sign Up</a>
          </li>



        </ul>
      </div>

    </nav>





  );
} export default Navbar; 