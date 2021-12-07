import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingReducer";
import sinhVienReducer from "./SinhVien/SinhVienReducer";
import sinhViensLopHocReducer from "./SinhVien/SinhVienLopHocReducer";
import taiKhoanReducer from "./TaiKhoan/LoginReducer";
import thongBaoReducer from "./ThongBao/thongBaoReducer";
import thongBaoSinhVienLopHocReducer from "./ThongBao/thongBaoSinhVienLopHocReducer";
import canhBaoSinhVienOfGiangVienReducer from "./CanhBao/canhBaoSinhVienOfGiangVienReducer";
import lopHocReducer from "./LopHoc/LopHocReducer";
const reducer = combineReducers({
  loadingReducer,
  sinhVienReducer,
  taiKhoanReducer,
  thongBaoReducer,
  lopHocReducer,
  sinhViensLopHocReducer,
  thongBaoSinhVienLopHocReducer,
  canhBaoSinhVienOfGiangVienReducer
});

export default reducer;