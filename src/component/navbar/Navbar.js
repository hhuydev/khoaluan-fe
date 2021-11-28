import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
  return (
   <div>
  <nav className="navbar navbar-expand-custom navbar-mainbg">
    <a className="navbar-brand navbar-logo" href="#">ECO</a>
    <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars text-white" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <div className="hori-selector"><div className="left" /><div className="right" /></div>
        <li className="nav-item">
          <NavLink></NavLink>
          <a className="nav-link" NavLink="/"><i className="fas fa-tachometer-alt" />Dashboard</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" NavLink="#"><i className="far fa-address-book" />Address Book</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" NavLink="#"><i className="far fa-clone" />Components</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" NavLink="#"><i className="far fa-calendar-alt" />Calendar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" NavLink="#"><i className="far fa-chart-bar" />Charts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" NavLink="#"><i className="far fa-copy" />Documents</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

  );
}
