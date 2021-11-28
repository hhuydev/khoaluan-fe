import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../../../component/navbar";
import { SinhVienRoutes } from "../../../routers";
import XemThongTin from "./xemThongTin";

export default function SinhVien(props) {
  // console.log(window.location.pathname);
  const getRoute = () => {
    return window.location.pathname !== "/sinhvien/maps";
  };

  const switchRoutes = (
    <Switch>
      <Route exact path="/xemthongtin" component={XemThongTin} />
    </Switch>
  );

  const Cha = (props) => {
    console.log(props.children);
    return (
      <>
        <Navbar routers={SinhVienRoutes} />
        {props.children}
      </>
    );
  };

  return (
    <Cha>
    {
       <Switch>
          <Route exact path="/sinhvien/xemthongtin" component={XemThongTin} />
       </Switch>
    }
  </Cha>
  );
}
