import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CheckAuthApi } from "../../api/TaiKhoanApi";
import { displayNotify } from "../../redux/actions/Notify";
import { atcDangNhap } from "../../redux/actions/TaiKhoan";
import "./style.css";
export default function Login(props) {
  document.title = "Đăng nhập";

  const [taiKhoan, setTaiKhoan] = useState({
    tenDangNhap: "",
    matKhau: "",
  });

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaiKhoan({ ...taiKhoan, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (taiKhoan.tenDangNhap === "" || taiKhoan.matKhau === "") {
      dispatch(
        displayNotify({
          message: "Tên đăng nhập và mật khẫu không được rỗng!",
          type: "warning",
        })
      );
      return;
    }
    dispatch(atcDangNhap(taiKhoan, props.history));
  };
  useEffect(() => {
    CheckAuthApi({
      token: localStorage.getItem("AccessToken"),
      id: localStorage.getItem("id"),
    })
      .then((res) => {
        if (res.data.active === false) {
          props.history.replace("/login");
          localStorage.removeItem("id");
          localStorage.removeItem("AccessToken");
        } else {
          if (res.data.role === "SINH_VIEN") {
            props.history.replace("/sinhvien");
          }
          if (res.data.role === "GIANG_VIEN") {
            props.history.replace("/giangvien");
          }
          if (res.data.role === "PHU_HUYNH") {
            props.history.replace("/phuhuynh");
          }
        }
      })
      .catch((err) => {
        localStorage.removeItem("id");
        localStorage.removeItem("AccessToken");
        return;
      });
  }, []);

  return (
    <>
      <div className="login-form">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <marquee
              style={{
                fontSize: "40px",
                color: "#88b77b",
                fontWeight: "400",
                margin: "20px",
              }}
            >
              {" "}
              HỆ THỐNG SỔ LIÊN LẠC ĐIỆN TỬ
            </marquee>
            <div className="fadeIn first">
              <img
                src="https://media.iuh.edu.vn/Media/2_sviuh/Images/iuh7313e0f8-4-e.png"
                id="icon"
                alt="User Icon"
              />
            </div>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="tenDangNhap"
                placeholder="Tên đăng nhập"
                onChange={handleInputChange}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="matKhau"
                placeholder="Mật khẩu"
                onChange={handleInputChange}
              />
              <input
                style={{ backgroundColor: "#88b77b" }}
                type="submit"
                className="fadeIn fourth"
                value="Đăng Nhập"
              />
            </form>
            {/* <div id="formFooter">
            <a className="underlineHover" href="#">Quên mật khẩu?</a>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
