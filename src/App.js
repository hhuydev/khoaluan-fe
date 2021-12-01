import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoadingComponent from './component/GlobalSettings/LoadingComponent';
import GiangVien from './containers/home/giangvien/GiangVien'
import PhuHuynh from './containers/home/phuhuynh/PhuHuynh'
import SinhVien from './containers/home/sinhvien/SinhVien'
import XemThongTin from './containers/home/sinhvien/xemThongTin';
import Login from './containers/login/Login';
import PageNotFound from './containers/pageNotFound';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <LoadingComponent />
        <Switch>
          <Route exact path="/giangvien" component={GiangVien} />
          <Route exact path="/sinhvien" component={SinhVien} />
          <Route exact path="/phuhuynh" component={PhuHuynh} />
          <Route exact path="/login" component={Login} />
          {/* <Redirect from="/" to="/login" /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
