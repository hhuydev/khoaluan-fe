import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingReducer";
import sinhVienReducer from "./SinhVien/SinhVienReducer";
import taiKhoanReducer from "./TaiKhoan/LoginReducer";
const reducer = combineReducers({
  loadingReducer,
  sinhVienReducer,
  taiKhoanReducer
});

export default reducer;