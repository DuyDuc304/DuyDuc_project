import React from 'react';
import logo from './images/logo.svg';
import htqlxh from './images/htqlxh.svg';
import { Link, } from "react-router-dom"
import { BiErrorCircle } from "react-icons/bi";
import { Navigate } from 'react-router-dom';

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
    const name = target.name.value; // typechecks!
    const password = target.password.value; // typechecks!
    if (name == "duc" && password == "123"
    ) {

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
                <form
                  onSubmit={this.checklogin}
                >
                  <div className='col1'>
                    <p >Tên đăng nhập*</p>
                    <input type="text" id="name" name='name'></input>
                    <p >Mật khẩu*</p>
                    <input type="password" id="password" name='password'></input>

                    <div><Link to={'/ressetpw'}>Quên mật khẩu?</Link></div>
                  </div>
                  <div className='col2'>
                    <div>
                      <button type='submit' >Đăng nhập</button>
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

                    <div style={{ display: 'flex' }}>

                      <BiErrorCircle className='icon' style={{ color: 'red', flex: 'none' }} /> <p style={{ flex: '4', margin: 'auto', color: 'red', fontSize: '14px' }}>Sai mật khẩu và hoặc tên đăng nhập</p>
                    </div>
                  </div>
                  <div className='col2'>
                    <button type='submit'>Đăng nhập</button>
                    <br />
                    <div><Link to={'/ressetpw'}>Quên mật khẩu?</Link></div>
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
        </div>
      </div>
    );
  }
}
export default Login;
