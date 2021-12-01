import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../component/navbar";
import { SinhVienRoutes } from "../../../routers";
import BangDiem from "./bangDiem";
import XemThongTin from "./xemThongTin";
import XinNghiHoc from "./xinNghiHoc";

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
 
     <BrowserRouter>
     <Navbar routers = {SinhVienRoutes}/>
     <Switch>
       {
         SinhVienRoutes.map(route=>{
           return (
            <Route exact path= {route.layout+route.path} component={route.component} /> 
           )
         })
       }
      </Switch>
     </BrowserRouter>
 
  );
}