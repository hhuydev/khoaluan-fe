import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL_API } from "../../../../constants/ApiConstant";

import "./style.css";

export default function ThongTinSinhVien(props) {
  const { data } = useSelector((state) => state.sinhVienReducer, shallowEqual);
  const [lopHoc, setLophoc] = useState([]);

  useEffect(() => {
    const fetchClassInfo = async () => {
      const resp = await axios.get(
        `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/${localStorage.getItem(
          "id"
        )}/lophocphans`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("AccessToken"), //the token is a variable which holds the token
          },
        }
      );
      console.log(resp.data);
      if (resp.data) setLophoc(resp.data);
    };
    fetchClassInfo();
  }, []);

  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-3">
          <label>Mã sinh viên</label>
        </div>
        <div className="col-md-9">
          <p>{data.maSinhVien}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Chuyên ngành</label>
        </div>
        <div className="col-md-9">
          <p>{data.chuyenNganh}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Họ và tên</label>
        </div>
        <div className="col-md-9">
          <p>{data.hoTen}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Giới tính</label>
        </div>
        <div className="col-md-9">
          <p>{data.gioiTinh ? "Nam" : "Nữ"}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Lớp</label>
        </div>
        <div className="col-md-9">
          <p>{data.tenLop}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Email</label>
        </div>
        <div className="col-md-9">
          <p>{data.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Số điện thoại</label>
        </div>
        <div className="col-md-9">
          <p>{data.soDT}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <label>Địa chỉ</label>
        </div>
        <div className="col-md-9">
          <p>{data.diaChi}</p>
        </div>
      </div>
      {/* <div className="row"> */}
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: "#88b77b", textAlign: "center" }}>
            <th style={{ color: "#fff" }} scope="col">
              Tên lớp
            </th>

            <th style={{ color: "#fff" }} scope="col">
              Thứ
            </th>

            <th style={{ color: "#fff" }} scope="col">
              Tiết
            </th>

            <th style={{ color: "#fff" }} scope="col">
              GVHD
            </th>
            <th style={{ color: "#fff" }} scope="col">
              SDT
            </th>
          </tr>
        </thead>
        {console.log(props.lopHoc)}
        {lopHoc.map((lh) => {
          return (
            <tbody>
              <td>{lh.tenMonHoc}</td>
              <td>{lh.thu}</td>
              <td>{lh.tiet}</td>
              <td>{lh.thongTinGiangVien.hoTen}</td>
              <td>{lh.thongTinGiangVien.soDT}</td>
            </tbody>
          );
        })}
      </table>
    </div>
    // </div>
  );
}
