import React from "react";
import './style.css'
export default function XinNghiHoc() {
  return (
    <div className="don-xin-nghi-hoc">
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <h5 className="text-center mb-4">ĐƠN XIN NGHỈ HỌC</h5>
              <form className="form-card">
                <div className="row justify-content-between text-left">
                  <div className="col-md-6">
                  <div className="form-group flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Lớp học phần <span className="text-danger"> *</span>
                    </label>{" "}
                    <input type="text" id="fname" name="fname" />{" "}
                  </div>
                  <div className="form-group flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                     Ngày nghỉ học <span className="text-danger"> *</span>
                    </label>{" "}
                    <input type="date" id="fname" name="fname" />{" "}
                  </div>
                  </div>
                  <div className="form-group col-md-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Lý do<span className="text-danger"> *</span>
                    </label>{" "}
                    <textarea id="ans" name="ans" rows={5} />{" "}
                   </div>
                </div>

                <div className="row justify-content-end">
                  <div className="form-group col-md-12" >
                    {" "}
                    <button type="submit" className="btn-block btn-primary" style={{width:'30%', marginLeft:'30%'}}>
                      Gửi đơn
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
