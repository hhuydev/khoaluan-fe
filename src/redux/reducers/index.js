import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingReducer";
import sinhVienReducer from "./SinhVien/SinhVienReducer";
import taiKhoanReducer from "./TaiKhoan/LoginReducer";
import thongBaoReducer from "./ThongBao/thongBaoReducer";
import lopHocReducer from "./LopHoc/LopHocReducer";
const reducer = combineReducers({
  loadingReducer,
  sinhVienReducer,
  taiKhoanReducer,
  thongBaoReducer,
  lopHocReducer
});

export default reducer;