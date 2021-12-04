import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CheckAuthApi } from "../../../api/TaiKhoanApi";
import LoadingComponent from "../../../component/GlobalSettings/LoadingComponent";
import Navbar from "../../../component/navbar";
import { GiangVienRoutes, SinhVienRoutes } from "../../../routers";

export default function GiangVien(props) {
  useEffect(() => {
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
        if (res.data.role === "SINH_VIEN") {
          props.history.replace("/sinhvien");
        }
        if (res.data.role === "GIANG_VIEN") {
          props.history.replace("/giangvien");
        }
        if (res.data.role === "PHU_HUYNH") {
          props.history.replace("/phuhuynh");
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
      <Navbar routers={GiangVienRoutes} history={props.history} />
      <Suspense fallback={LoadingComponent}>
        <Switch>
          {GiangVienRoutes.map((route) => {
            return (
              <Route
                exact
                key={route.path}
                path={route.layout + route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
