import { lazy } from "react";
// import LopHoc from "./containers/home/giangvien/lopHoc";
// import LopHocPhan from "./containers/home/giangvien/lopHocPhan";
import ThongBao from "./containers/home/sinhvien/thongBao";
// const GiangVien = lazy(() => import('./containers/home/giangvien/GiangVien'));
const LopHoc = lazy(() => import('./containers/home/giangvien/lopHoc'));
const LopHocPhan = lazy(() => import('./containers/home/giangvien/lopHocPhan'));
const GiangVien = lazy(() => import('./containers/home/giangvien/GiangVien'));
const PhuHuynh = lazy(() => import('./containers/home/phuhuynh/PhuHuynh'));
const BangDiem = lazy(() => import('./containers/home/sinhvien/bangDiem'));
const SinhVien = lazy(() => import('./containers/home/sinhvien/SinhVien'));
const XemThongTin = lazy(() => import('./containers/home/sinhvien/xemThongTin'));
const XinNghiHoc = lazy(() => import('./containers/home/sinhvien/xinNghiHoc'));
const Login = lazy(() => import('./containers/login/Login'));


const LoginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/taikhoan",
  },
];

const SinhVienRoutes = [
  {
    path: "/xemthongtin",
    name: "Thông tin cá nhân",
    //   icon: Dashboard,
    component: XemThongTin,
    layout: "/sinhvien",
  },
  {
    path: "/xinnghihoc",
    name: "Đơn xin nghỉ học",
    icon: "",
    component: XinNghiHoc,
    layout: "/sinhvien",
  }, {
    path: "/bangdiem",
    name: "Kết quả học tập",
    icon: "",
    component: BangDiem,
    layout: "/sinhvien",
  },
  {
    path: "/thongbao",
    name: "",
    icon: <i class="fas fa-bell"></i>,
    component: ThongBao,
    layout: "/sinhvien",
  },
]



const GiangVienRoutes = [
  // {
  //   path: "/xemthongtin",
  //   name: "Xem thông tin",
  //   icon: "",
  //   // component: XemThongTin,
  //   layout: "/giangvien",
  // },
  {
    path: "/lophocphan",
    name: "Lớp học phần",
    icon: "",
    component: LopHocPhan,
    layout: "/giangvien",
  }, {
    path: "/lophoc",
    name: "Lớp học",
    icon: "",
    component: LopHoc,
    layout: "/giangvien",
  },
]
const PhuHuynhRoutes = [

]


const LayoutMain = [
  {
    path: "/sinhvien",
    component: SinhVien
  },
  {
    path: "/giangvien",
    component: GiangVien,
    // routers:GiangV
  },
  {
    path: "/phuhuynh",
    component: PhuHuynh
  },
  {
    path: "/login",
    component: Login
  }
]

export { LayoutMain, SinhVienRoutes, LoginRoutes, GiangVienRoutes, PhuHuynhRoutes };