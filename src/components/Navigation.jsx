import '../assets/styles/Nav.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navigation() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row ">
      <a className="flex-sm-fill text-sm-center nav-link new" aria-current="page" href="#">Home</a>
      <a className="flex-sm-fill text-sm-center nav-link new" href="#">About Us</a>
      <a className="flex-sm-fill text-sm-center nav-link new" href="#">Our Healing Center</a>
      <a className="flex-sm-fill text-sm-center nav-link new" href="#">Healing Stories</a>
      <a className="flex-sm-fill text-sm-center nav-link " href="#">
        <div className='logo'>
          <img src='images/logo.png' alt="Logo" />
        </div>
      </a>
      <a className="flex-sm-fill text-sm-center nav-link new dropdown-toggle" href="#" id="programsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Programs 
      </a>
      <ul className="dropdown-menu" aria-labelledby="programsDropdown">
        <li><a className="dropdown-item" href="#">Option 1</a></li>
        <li><a className="dropdown-item" href="#">Option 2</a></li>
        <li><a className="dropdown-item" href="#">Option 3</a></li>
      </ul>
      <a className="flex-sm-fill text-sm-center nav-link new" href="#">News & Media</a>
      <a className="flex-sm-fill text-sm-center nav-link new dropdown-toggle" href="#" id="onlineProgramsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Online Programs
      </a>
      <ul className="dropdown-menu" aria-labelledby="onlineProgramsDropdown">
        <li><a className="dropdown-item" href="#">Option 1</a></li>
        <li><a className="dropdown-item" href="#">Option 2</a></li>
        <li><a className="dropdown-item" href="#">Option 3</a></li>
      </ul>
      <button style={{ borderRadius: '10px' }} >Book Appointment</button>
    </nav>
  );
}

export default Navigation;
