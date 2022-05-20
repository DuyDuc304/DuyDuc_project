import React from 'react';
import logo from './images/logo.svg';
import htqlxh from './images/htqlxh.svg';
import { render, screen } from '@testing-library/react';
import { BiErrorCircle } from "react-icons/bi";
import Dashboard from '../dashboard';


class Login extends React.Component {

  checklogin
    (e: React.SyntheticEvent) {
    const login: any = document.querySelector(".login")
    const loginfail: any = document.querySelector(".loginfail")
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      password: { value: string };
    };
    const name = target.name.value;
    const password = target.password.value;
    if (name === "duc" && password === "123"
    ) {
      return (render(<Dashboard />));
    }
    else {
      loginfail.style.display = 'block';
      login.style.display = 'none';
    }

  }
  render() {
    return (
      <div className='bg'>
        <div className="Backgroundapp">
          <div>
            <div className='logo'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='login'>
              <div className='myform'>
                <form onSubmit={this.checklogin}>
                  <div className='col1'>
                    <p >Tên đăng nhập*</p>
                    <input type="text" id="name" name='name'></input>
                    <p >Mật khẩu*</p>
                    <input type="password" id="password" name='password'></input>

                    <div style={{ margin: "0px 0px 0px 3px" }}><a className='myform-a' href='/ressetpw'>Quên mật khẩu?</a></div>
                  </div>
                  <div className='col2'>
                    <div>
                      <button className='myform-button ' type='submit' >Đăng nhập</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='loginfail'>
              <div className='myform'>
                <form onSubmit={this.checklogin}>
                  <div className='col1'>
                    <p >Tên đăng nhập*</p>
                    <input type="text" id="name" name='name' style={{ border: "1.5px solid red" }}></input>
                    <p >Mật khẩu*</p>
                    <input type="password" id="password" name='password' style={{ border: "1.5px solid red" }} ></input>

                    <div style={{ display: 'flex', margin: "0px 0px 0px 2px" }}>

                      <BiErrorCircle className='icon' style={{ color: 'red', flex: 'none' }} /> <p style={{ flex: '4', margin: 'auto', color: 'red', fontSize: '14px' }}>Sai mật khẩu và hoặc tên đăng nhập</p>
                    </div>
                  </div>
                  <div className='col2'>
                    <button className='myform-button ' type='submit'>Đăng nhập</button>
                    <br />
                    <div style={{ display: 'flex' }}>
                      <a className='myform-a' style={{ margin: "auto" }} href='/ressetpw'>Quên mật khẩu?</a>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className='imagedangnhap'>
            <div className='hinh'>
              <img src={htqlxh} alt="htqlxh" />
            </div>
          </div>
        </div >
      </div >
    );
  }
}
export default Login;
