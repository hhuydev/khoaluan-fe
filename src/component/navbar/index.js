import React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import './style.css';
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" >ECO</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
=======
import "./style.css";

export default function Navbar(props) {
  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("AccessToken");
    props.history.replace("/login");
  };

  return (
    <div>
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
>>>>>>> 75ed3aba2504b3bc9deb6cca4948d23d5747b550
          <i className="fas fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
<<<<<<< HEAD
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

=======
            <div className="hori-selector">
              <div className="left" />
              <div className="right" />
            </div>
            {props.routers.map((router, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    to={router.layout + router.path}
                  >
                    {router.name}
                  </NavLink>
                </li>
              );
            })}
            <li className="nav-item" onClick={handleLogout}>
              Đăng xuất
            </li>
>>>>>>> 75ed3aba2504b3bc9deb6cca4948d23d5747b550
          </ul>
        </div>
      </nav>
    </div>
<<<<<<< HEAD

=======
>>>>>>> 75ed3aba2504b3bc9deb6cca4948d23d5747b550
  );
}
