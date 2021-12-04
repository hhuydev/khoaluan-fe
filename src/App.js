import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingComponent from "./component/GlobalSettings/LoadingComponent";
import GiangVien from "./containers/home/giangvien/GiangVien";
import PhuHuynh from "./containers/home/phuhuynh/PhuHuynh";
import SinhVien from "./containers/home/sinhvien/SinhVien";
import XemThongTin from "./containers/home/sinhvien/xemThongTin";
import Login from "./containers/login/Login";
import PageNotFound from "./containers/pageNotFound";
import { LayoutMain } from "./routers";

export default function App() {
  const renderRouters = () => { };
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={LoadingComponent}>
          <LoadingComponent />

          <Switch>
            <Route exact path="/login" component={Login} />
            {LayoutMain.map((layout, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={layout.path}
                  component={layout.component}
                />
              );
            })}
            <Redirect from="/" to="/login" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
