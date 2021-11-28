import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">ECO</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item">
              <a class="nav-link" link="/"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="far fa-address-book"></i>Address Book</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="far fa-clone"></i>Components</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="far fa-calendar-alt"></i>Calendar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="far fa-chart-bar"></i>Charts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="far fa-copy"></i>Documents</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
