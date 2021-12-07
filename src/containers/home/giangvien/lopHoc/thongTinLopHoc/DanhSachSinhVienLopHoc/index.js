import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import CanhBaoSinhVien from "../../../../../../component/giangVien/CanhBaoSinhVien";
import SinhVienLopHocItem from "../../../../../../component/giangVien/sinhVienLopHocItem";
import "./style.css";

export default function DanhSachSinhVienLopHoc() {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const { data } = useSelector((state) => state.sinhViensLopHocReducer,shallowEqual);

  return (
    <>
      <div className="danh-sach-sinh-vien">
        <div className="header-danh-sach-sinh-vien">
          <div className="search-danh-sach-sinh-vien">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Nhập từ khóa cần tìm"
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light"
                />
                <div className="input-group-append">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "90%" }}></div>
          <div className="selected-danh-sach-sinh-vien">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              defaultValue={1}
            >
              <option value={0}>Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr
              style={{
                backgroundColor: "#b3e0ff",
                textAlign: "center",
              }}
            >
              <th scope="col">STT</th>
              <th scope="col">Mã sinh viên</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Email</th>
              <th scope="col">Tình trạng</th>
              <th scope="col">Kỉ luật</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {data ? (
              data.sinhVienLopHocDtos.map((item, index) => {
                return (
                  <SinhVienLopHocItem
                    key={item.id}
                    stt={index + 1}
                    item={item}
                  />
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
     
    
    </>
  );
}
