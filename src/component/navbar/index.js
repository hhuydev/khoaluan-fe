import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';
export default function Navbar(props) { 
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
        {props.routers.map((router,index)=>{
            return(
                <li className="nav-item" key = {index}>
                <NavLink className="nav-link" to = {router.layout+router.path}>
                    {router.name}
                </NavLink>
              </li>
            )
        })}
     
      </ul>
    </div>
  </nav>
</div>

  );
}
