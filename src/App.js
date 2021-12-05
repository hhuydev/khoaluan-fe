import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingComponent from "./component/GlobalSettings/LoadingComponent"; 
import Login from "./containers/login/Login"; 
import { LayoutMain } from "./routers";
import './App.css';
export default function App() {
  const renderRouters = () => { };
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={LoadingComponent}>
          <LoadingComponent />
          {/* <Notify /> */}
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
