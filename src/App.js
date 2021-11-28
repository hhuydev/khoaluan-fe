import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoadingComponent from './component/GlobalSettings/LoadingComponent';
import GiangVien from './pages/home/giangvien/GiangVien'
import PhuHuynh from './pages/home/phuhuynh/PhuHuynh'
import SinhVien from './pages/home/sinhvien/SinhVien'
import Login from './pages/login/Login';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <LoadingComponent/>
        <Switch>
          <Route exact path="/giangvien" component={GiangVien} />
          <Route exact path="/sinhvien" component={SinhVien} />
          <Route exact path="/phuhuynh" component={PhuHuynh} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Login} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}