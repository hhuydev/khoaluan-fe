import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { atcDangNhap } from '../../redux/actions/TaiKhoan';
import './style.css'
export default function Login(props) {
  const [taiKhoan, setTaiKhoan] = useState({
   
  });

  const dispatch = useDispatch();
  const handleInputChange =(e)=>{
    const { name, value } = e.target;
    setTaiKhoan({ ...taiKhoan, [name]: value });
    console.log(taiKhoan);
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(taiKhoan);
    dispatch(atcDangNhap(taiKhoan,props.history));

    }
 


  return (
    <div className="login-form">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Đăng Nhập </h2>
          <div className="fadeIn first">
            <img src="http://ativn.edu.vn/wp-content/uploads/2018/03/user.png" id="icon" alt="User Icon" />
          </div>
          <form onSubmit = {onSubmit}>
            <input type="text" id="login" className="fadeIn second" name="tenDangNhap" placeholder="Tên đăng nhập" onChange ={handleInputChange} />
            <input type="password" id="password" className="fadeIn third" name="matKhau" placeholder="Mật khẩu" onChange ={handleInputChange} />
            <input type="submit" className="fadeIn fourth" value="Đăng Nhập" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="#">Quên mật khẩu?</a>
          </div>
        </div>
      </div>
    </div>

  )
}
