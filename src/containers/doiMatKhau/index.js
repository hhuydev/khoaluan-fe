import React from "react";
import Navbar from "../../component/navbar";
import "./style.css";

export default function DoiMatKhau() {
  return (
    <div className="doi-mat-khau">
      <h1 style={{ textAlign: "center", color:'steelblue', textTransform: 'uppercase' }}>Đổi mật khẩu</h1>
      <div className="container">
        <div className="row">
            
          <div className="col-sm-8" style={{marginLeft:'20%', marginTop:'5%'}}>
            <label>Mật khẩu hiện tại</label>
            <div className="form-group pass_show">
              <input
                type="password"
                defaultValue="faisalkhan@123"
                className="form-control"
                placeholder="Current Password"
              />
            </div>
            <label>Mật khẩu mới</label>
            <div className="form-group pass_show">
              <input
                type="password"
                defaultValue="faisal.khan@123"
                className="form-control"
                placeholder="New Password"
              />
            </div>
            <label>Xác nhận mật khẩu mới</label>
            <div className="form-group pass_show">
              <input
                type="password"
                defaultValue="faisal.khan@123"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <button style={{float:"right"}} className="btn btn-primary">Đổi mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
