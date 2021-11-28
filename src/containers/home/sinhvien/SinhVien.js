import React from 'react'
import { Route, Switch } from 'react-router';
import Navbar from '../../../component/navbar/Navbar'
import { SinhVienRoutes } from '../../../routers';

export default function SinhVien(props) {
  console.log(window.location.pathname);
  const switchRoutes = (
    <Switch>
      {SinhVienRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        ); 
      })}
    </Switch>
  );



  return (
    <>
      <Navbar router = {SinhVienRoutes}/>
      {switchRoutes}
    </>
  )
}
