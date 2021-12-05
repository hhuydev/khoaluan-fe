import { getLopHocApi } from "../../api/GiangVienApi";
import { GETDANHSACH_LOPHOC_FAILED, GETDANHSACH_LOPHOC_SUCCESS } from "../constants/GiangVienConstants";
import { displayLoading, hideLoading } from "./Loading";

export const atcGetDanhSachLopHoc = (page) => {
    return (dispatch) => {
      dispatch(displayLoading());
      getLopHocApi(page)
        .then((res) => { 
          dispatch(getDanhSachLopHocSuccess(res))
          dispatch(hideLoading());
        })
        .catch((err) => {
          dispatch(getDanhSachLopHocFailed(err))
          dispatch(hideLoading());
        });
    };
  };
  
  
  const getDanhSachLopHocSuccess = (res) => {
    return {
      type: GETDANHSACH_LOPHOC_SUCCESS,
      payload: res.data
    }
  }
  
  
  const getDanhSachLopHocFailed = (err) => {
    return {
      type: GETDANHSACH_LOPHOC_FAILED,
      payload: err
    }
  }