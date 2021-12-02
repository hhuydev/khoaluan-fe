import { DangNhapApi,CheckAuthApi } from "../../api/TaiKhoanApi";
import * as taiKhoanConstants from "./../constants/taiKhoanConstants";
import { displayLoading, hideLoading } from "./Loading";

export const atcDangNhap = (taiKhoan, history) => {
  return (dispatch) => {
    dispatch(displayLoading());
    DangNhapApi(taiKhoan)
      .then((res) => {
        console.log(res.data);
        dispatch(DangNhapSuccess(res.data));

        const { thongTin, token, role } = res.data;
        localStorage.setItem("id", thongTin.id);
        localStorage.setItem("AccessToken", token);
        if (role === "SINH_VIEN") {
          history.replace("/sinhvien");
        }
        if (role === "GIANG_VIEN") {
          history.replace("/giangvien");
        }

        if (role === "PHU_HUYNH") {
          history.replace("/phuhuynh");
        }

        dispatch(hideLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(DangNhapFailed(err.response));
        dispatch(hideLoading());
      });
  };
};


export const checkAuthAtc = (token, id,history) => {
    return (dispatch) => { 
        CheckAuthApi({token:token,id:id}).then(res=>{
            console.log(history);
            console.log(res);
            if(res.active===false){
                history.replace("/");
            }
        }).catch(err=>{
            history.replace("/login")
            localStorage.removeItem("id");
            localStorage.removeItem("AccessToken");
        })
    };
  };

const DangNhapSuccess = (res) => {
  return {
    type: taiKhoanConstants.DANGNHAP_SUCCSESS,
    payload: res.data,
  };
};

const DangNhapFailed = (err) => {
  return {
    type: taiKhoanConstants.DANGNHAP_FAILED,
    payload: err,
  };
};
