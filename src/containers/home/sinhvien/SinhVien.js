import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CheckAuthApi } from "../../../api/TaiKhoanApi";
import Navbar from "../../../component/navbar";
import { checkAuthAtc } from "../../../redux/actions/TaiKhoan";
import { SinhVienRoutes } from "../../../routers";

export default function SinhVien(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(checkAuthAtc(localStorage.getItem("AccessToken"),localStorage.getItem("id"),props.history))
    CheckAuthApi({
      token: localStorage.getItem("AccessToken"),
      id: localStorage.getItem("id"),
    })
      .then((res) => { 
        if (res.data.active === false) {
          props.history.replace("/");
          localStorage.removeItem("id");
          localStorage.removeItem("AccessToken");
        }
      })
      .catch((err) => {
        props.history.replace("/");
        localStorage.removeItem("id");
        localStorage.removeItem("AccessToken");
      });
  }, []);
  return (
    <BrowserRouter>
      <Navbar routers={SinhVienRoutes} history={props.history} />
      <Switch>
        {SinhVienRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              exact
              path={route.layout + route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
