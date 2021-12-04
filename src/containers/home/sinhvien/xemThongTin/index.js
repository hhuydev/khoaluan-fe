import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import ChinhSuaThongTin from '../../../../component/sinhVien/thongTinSinhVien/chinhSua'
import ThongTinSinhVien from '../../../../component/sinhVien/thongTinSinhVien/thongTin'
import { atcXemThongTinSinhVien } from '../../../../redux/actions/SinhVien';
import './style.css';
export default function XemThongTin() {
    return (
        <div className="profile">
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="dasdasda" />
                                <div className="file btn btn-lg btn-primary">
                                    Chỉnh sửa
                                    <input type="file" name="file" />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h3>
                                    Thông Tin Sinh Viên
                                </h3>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Chỉnh sửa thông tin</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">

                                <ThongTinSinhVien />
                                <ChinhSuaThongTin />

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
