import React from 'react';
import logo from './images/logo.svg';
import htqlxh from './images/htqlxh.svg';
import { Link } from "react-router-dom"

class Login extends React.Component {
  render() {
    return (
      <div className='bg'>
        <div className="Backgroundapp">
          <div>
            <div className='logo'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='myform'>
              <form>
                <div className='col1'>
                  <p >Tên đăng nhập*</p>
                  <input type="text" id="name" name='name'></input>
                  <p >Mật khẩu*</p>
                  <input type="password" id="password" name='password'></input>
                  <div><Link to={'/ressetpw'}>Quên mật khẩu?</Link></div>
                </div>
                <div className='col2'>
                  <div className='magin'>
                    <Link to="/Dashboard">
                      <div>
                        <button type='submit' >Đăng nhập</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </form>
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
