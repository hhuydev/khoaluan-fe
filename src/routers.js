import XemThongTin from "./containers/home/sinhvien/xemThongTin";
import XinNghiHoc from "./containers/home/sinhvien/xinNghiHoc";
import Login from "./containers/login/Login";

 
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
        layout: "/sinhvien",
      },
      {
        path: "/xinnghihoc",
        name: "Xin nghỉ học",
      //   icon: Dashboard,
        component: XinNghiHoc,
        layout: "/sinhvien",
      },
  ]
  
  export { SinhVienRoutes, LoginRoutes };