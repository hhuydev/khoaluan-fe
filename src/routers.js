import { lazy } from "react"; 
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
    //   icon: Dashboard,
      component: Login,
      layout: "/taikhoan",
    },
  ];

  const SinhVienRoutes = [
    {
        path: "/xemthongtin",
        name: "Xem thông tin",
      //   icon: Dashboard,
        component: XemThongTin,
        layout: "/giangvien",
      },
      {
        path: "/xinnghihoc",
        name: "Xin nghỉ học",
      //   icon: Dashboard,
        component: XinNghiHoc,
        layout: "/giangvien",
      }, {
        path: "/bangdiem",
        name: "Bảng điểm",
      //   icon: Dashboard,
        component: BangDiem,
        layout: "/giangvien",
      },
  ]

  const GiangVienRoutes = [
    {
        path: "/xemthongtin",
        name: "Xem thông tin",
      //   icon: Dashboard,
        component: XemThongTin,
        layout: "/sinhvien",
      },
      {
        path: "/xinnghihoc",
        name: "Xin nghỉ học",
      //   icon: Dashboard,
        component: XinNghiHoc,
        layout: "/sinhvien",
      }, {
        path: "/bangdiem",
        name: "Bảng điểm",
      //   icon: Dashboard,
        component: BangDiem,
        layout: "/sinhvien",
      },
  ]
  const PhuHuynhRoutes = [
    
  ]


  const LayoutMain = [
    {
      path:"/sinhvien",
      component:SinhVien
    },
    {
      path:"/giangvien",
      component:GiangVien,
      // routers:GiangV
    },
    {
      path:"/phuhuynh",
      component:PhuHuynh
    },
    {
      path:"/login",
      component:Login
    }
  ]
  
  export { LayoutMain,SinhVienRoutes, LoginRoutes ,GiangVienRoutes,PhuHuynhRoutes};