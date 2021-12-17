import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { atcSinhVienXinNghiHoc } from "../../../../redux/actions/SinhVien";
import "./style.css";
import { FormatIndentDecreaseTwoTone } from "@material-ui/icons";
import { formatDateTime } from "../../../../utils/format/formatValues";
export default function XinNghiHoc() {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => state.lopHocPhanSinhVienReducer,
    shallowEqual
  );
  const state = useSelector(
    (state) => state.donXinNghiHocOfSinhVienReducer,
    shallowEqual
  );
  const [dataApi, setDataApi] = useState({
    id: "",
    ngayNghi: "",
    lyDo: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setDataApi({ ...dataApi, [name]: value });
  };

  useEffect(() => {}, []);

  const subMitData = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Lưu ý",
      message:
        "Nếu được duyệt bạn sẽ tính nghỉ học nữa buổi, nếu đủ 3 buổi bạn bị cấm thi , bạn đã chắc chắn! ",
      buttons: [
        {
          label: "Có",
          onClick: () => {
            dispatch(atcSinhVienXinNghiHoc(dataApi));
          },
          className: "btn btn-primary",
        },
        {
          label: "Không",
          onClick: () => {
            return;
          },
          className: "btn btn-primary btn-sm",
        },
      ],
    });
  };

  return (
    <div className="don-xin-nghi-hoc">
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <h5 className="text-center mb-4">ĐƠN XIN NGHỈ HỌC</h5>
              <form className="form-card" onSubmit={subMitData}>
                <div className="row justify-content-between text-left">
                  <div className="col-md-6">
                    <div className="form-group flex-column d-flex">
                      <label className="form-control-label px-3">
                        Lớp học phần <span className="text-danger"> *</span>
                      </label>
                      <select
                        className="form-select"
                        selected
                        name="id"
                        defaultValue={-1}
                        aria-label="Default select example"
                        style={{
                          height: "45px",
                          borderColor: "#b8b894",
                          borderRadius: "0.3rem",
                        }}
                        onChange={onChange}
                      >
                        <option value={-1}>Chọn lớp học phần</option>
                        {data ? (
                          data.map((lopHocPhan) => {
                            return (
                              <option
                                key={lopHocPhan.idSinhVienLopHocPhan}
                                value={lopHocPhan.idSinhVienLopHocPhan}
                              >{`${lopHocPhan.tenLopHocPhan}-${lopHocPhan.soNgayNghiPhep}P-${lopHocPhan.soNgayNghiKhongPhep}KP`}</option>
                            );
                          })
                        ) : (
                          <option value={0}>...</option>
                        )}
                      </select>
                    </div>
                    <div className="form-group flex-column d-flex">
                      <label className="form-control-label px-3">
                        Ngày nghỉ học <span className="text-danger"> *</span>
                      </label>
                      <input
                        name="ngayNghi"
                        onChange={onChange}
                        type="date"
                        id="fname"
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Lý do<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      name="lyDo"
                      onChange={onChange}
                      id="ans"
                      rows={5}
                    />
                  </div>
                </div>

                <div className="row justify-content-end">
                  <div className="form-group col-md-12">
                    <button
                      type="submit"
                      className="btn-block btn-primary"
                      style={{ width: "30%", marginLeft: "70%" }}
                    >
                      Gửi đơn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="danh-sach-dơn-nghi-hoc-sinh-vien">
        <h5 style={{ textAlign: "center" }}>DANH SÁCH ĐƠN NGHỈ HỌC</h5>
        <br></br>
        <br></br>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table table table-bordered table-striped mb-0">
            <thead style={{ backgroundColor: "skyblue" }}>
              <tr>
                <th>STT</th>
                <th>Lớp học phần</th>
                <th>Ngày nghỉ</th>
                <th>Lý do</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {state ? (
                state.data.map((item,index) => {
                  return (
                    <tr key={item.idDonXinNghiHoc}>
                      <td>{index+1}</td>
                      <td>{item.tenLopHocPhan}</td>
                      <td>{formatDateTime(item.ngayNghi)}</td>
                      <td>{item.noiDung.slice(0,20)}</td>
                      <td>{item.trangThai?'Được chấp nhận':'đang chờ'}</td>
                    </tr>
                  );
                })
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
