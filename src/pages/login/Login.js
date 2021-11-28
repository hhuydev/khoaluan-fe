import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div classname="login-form">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Đăng Nhập </h2>
          <div className="fadeIn first">
            <img src="http://ativn.edu.vn/wp-content/uploads/2018/03/user.png" id="icon" alt="User Icon" />
          </div>
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Tên đăng nhập" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Mật khẩu" />
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
