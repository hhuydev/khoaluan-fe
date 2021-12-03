import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" >ECO</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector"><div className="left" /><div className="right" /></div>
            {props.routers.map((router, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link" to={router.layout + router.path}>
                    {router.name}
                  </NavLink>
                </li>
              )
            })}
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-cog"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Đăng xuất</a>
                <a className="dropdown-item" href="#">Đổi mật khẩu</a>
              </div>
            </div>

          </ul>
        </div>
      </nav>
    </div>

  );
}
