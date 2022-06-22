import React from 'react';
import logo from '../../assets/images/logo.svg';
import htqlxh from '../../assets/images/htqlxh.svg';
import { BiErrorCircle } from "react-icons/bi";
import { FiEyeOff, FiEye } from 'react-icons/fi';






class Login extends React.Component {
  showpw() {
    const show: any = document.getElementById('show')
    const hide: any = document.getElementById('hide')
    const eye: any = document.getElementById('pw')
    const type = eye.getAttribute("type") === "password" ? "text" : "password";
    eye.setAttribute("type", type);
    if (type === "password") {
      show.style.display = 'block';
      hide.style.display = 'none';
    }
    else {
      hide.style.display = 'block';
      show.style.display = 'none';
    }
  }
  showpw1() {
    const show: any = document.getElementById('show1')
    const hide: any = document.getElementById('hide1')
    const eye: any = document.getElementById('pw1')
    const type = eye.getAttribute("type") === "password" ? "text" : "password";
    eye.setAttribute("type", type);
    if (type === "password") {
      show.style.display = 'flex';
      hide.style.display = 'none';
    }
    else {
      hide.style.display = 'flex';
      show.style.display = 'none';
    }
  }

  checklogin(e: React.SyntheticEvent) {
    const wn: any = document.getElementById('warning')
    const pw: any = document.getElementById('pass')
    const tk: any = document.getElementById('name')
    const qmk1: any = document.getElementById('qmk1')
    const qmk2: any = document.getElementById('qmk2')
    const wn1: any = document.getElementById('warning1')
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      password: { value: string };
    };
    const name = target.name.value.trim();
    const password = target.password.value.trim();
    if (name !== '' && password !== '') {
      if (name === "duc" && password === "123") {
        var parser = document.location.href = "/Dashboard";
        return (parser);
      }
      else {
        pw.style.border = "1.5px solid red"
        tk.style.border = "1.5px solid red"
        wn.style.display = 'flex'
        qmk1.style.display = 'none'
        qmk2.style.display = 'flex'
        wn1.style.display = 'none'
      }
    } else {
      wn1.style.display = 'flex'
      wn1.innerText = 'Tài khoản và mật khẩu không được để trống '
      pw.style.border = "1.5px solid red"
      tk.style.border = "1.5px solid red"
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
                <form onSubmit={this.checklogin} autoComplete="off">
                  <div className='col1'>
                    <p id='warning1' style={{ color: 'red', fontSize: '14px' }}></p>
                    <p >Tên đăng nhập *</p>
                    <input className='input-myform' type="text" id="name" name='name' placeholder="Nhập tài khoản "></input>

                    <p >Mật khẩu *</p>
                    <div className='row-myform' id='pass'>
                      <input className='input-have-eye' type="password" id="pw" name='password' placeholder="Nhập mật khẩu"></input>
                      <label style={{ fontSize: '18px' }} className='button-eye' onClick={this.showpw} id='eye'>
                        <FiEyeOff className='icon-eye' id='show' />
                        <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} />
                      </label>
                    </div>

                    <div id='qmk1' style={{ margin: "0px 0px 0px 3px" }}>
                      <a className='myform-a' href='/Ressetpw'>Quên mật khẩu?</a>
                    </div>
                    <div id='warning' style={{ display: 'none', margin: "0px 0px 0px 2px" }}>
                      <BiErrorCircle className='icon' style={{ color: 'red', flex: 'none', marginRight: '4px' }} />
                      <p style={{ flex: '4', margin: 'auto', color: 'red', fontSize: '14px' }}>Sai mật khẩu hoặc tên đăng nhập</p>
                    </div>
                  </div>
                  <div className='col2'>
                    <button className='myform-button ' type='submit' >Đăng nhập</button>
                    <br />
                    <div id='qmk2' style={{ display: 'none' }}>
                      <a className='myform-a' style={{ margin: "auto" }} href='/Ressetpw'>Quên mật khẩu?</a>
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
