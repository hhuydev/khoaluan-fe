import React from 'react'

export default function XinNghiHoc() {
    return (
        <div className="don-xin-nghi-hoc">
            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <div className="card">
                            <h5 className="text-center mb-4">ĐƠN XIN NGHỈ HỌC</h5>
                            <form className="form-card" onsubmit="event.preventDefault()">
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Lớp học phần<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" /> </div>
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Giảng viên</label> <lable>Nguyễn Thi Má</lable> </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Ngày xin nghỉ<span className="text-danger"> *</span></label> <input type="date" id="email" name="email" /> </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Lý do<span className="text-danger"> *</span></label> <textarea id="ans" name="ans" /> </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Gửi đơn</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
