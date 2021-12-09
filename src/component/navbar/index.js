import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Navbar(props) {
  const { pathname } = props.history.location;
  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("AccessToken");
    props.history.replace("/login");
  };
  const handleChangePassword = () => {
    // props.history.push()
    // console.log(`${pathname}/doimatkhau`);
  }

  return (
    <div className="nav-menu">
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">
          ECO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left" />
              <div className="right" />
            </div>
            {props.routers.map((router, index) => {

              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link active"
                    to={router.layout + router.path}
                  >
                    {router.name}
                    {router.icon}
                  </NavLink>

                </li>
              );
            })}
            {

            }

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-cog"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item" onClick={handleLogout}>Đăng xuất</li>
                <NavLink className="dropdown-item" activeClassName="dropdown-item" to={`${pathname}/doimatkhau`}>Đổi mật khẩu</NavLink>
              </div>

            </div>
          </ul>
        </div>
      </nav>
    </div>

  );
}
