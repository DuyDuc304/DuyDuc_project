import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import htqlxh from '../../assets/images/htqlxh.svg';
import { BiErrorCircle } from "react-icons/bi";
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';






const Login = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: any) => state.User);
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  function showpw() {
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
  function handleInPutPW(e: any) {
    setPassword(e.target.value)
  }

  function handleInPutUserName(e: any) {
    setUserName(e.target.value)
  }

  function checklogin(e: React.SyntheticEvent) {
    e.preventDefault()
    const wn: any = document.getElementById('warning')
    const pw: any = document.getElementById('pass')
    const tk: any = document.getElementById('name')
    const qmk1: any = document.getElementById('qmk1')
    const qmk2: any = document.getElementById('qmk2')
    const wn1: any = document.getElementById('warning1')
    const name = UserName.trim();
    const password = Password.trim();
    if (name !== '' && password !== '') {
      if (name === userInfo.UserName && password === userInfo.Password) {
        navigate('/DashBoard')
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
      wn1.innerText = 'T??i kho???n v?? m???t kh???u kh??ng ???????c ????? tr???ng '
      pw.style.border = "1.5px solid red"
      tk.style.border = "1.5px solid red"
    }

  }
  return (
    <div className='bg'>
      <div className="Backgroundapp">
        <div>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='login'>
            <div className='myform'>
              <form onSubmit={checklogin} autoComplete="off">
                <div className='col1'>
                  <p id='warning1' style={{ color: 'red', fontSize: '14px' }}></p>
                  <p >T??n ????ng nh???p *</p>
                  <input className='input-myform' value={UserName} type="text" id="name" name='name' onChange={handleInPutUserName} placeholder="Nh???p t??i kho???n "></input>

                  <p >M???t kh???u *</p>
                  <div className='row-myform' id='pass'>
                    <input className='input-have-eye' type="password" id="pw" name='password' value={Password} onChange={handleInPutPW} placeholder="Nh???p m???t kh???u"></input>
                    <label style={{ fontSize: '18px' }} className='button-eye' onClick={showpw} id='eye'>
                      <FiEyeOff className='icon-eye' id='show' />
                      <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} />
                    </label>
                  </div>

                  <div id='qmk1' style={{ margin: "0px 0px 0px 3px" }}>
                    <span className='myform-a' onClick={() => navigate('/Ressetpw')}>Qu??n m???t kh???u?</span>
                  </div>
                  <div id='warning' style={{ display: 'none', margin: "0px 0px 0px 2px" }}>
                    <BiErrorCircle className='icon' style={{ color: 'red', flex: 'none', marginRight: '4px' }} />
                    <p style={{ flex: '4', margin: 'auto', color: 'red', fontSize: '14px' }}>Sai m???t kh???u ho???c t??n ????ng nh???p</p>
                  </div>
                </div>
                <div className='col2'>
                  <button className='myform-button ' type='submit' >????ng nh???p</button>
                  <br />
                  <div id='qmk2' style={{ display: 'none' }}>
                    <span className='myform-a' style={{ margin: "auto" }} onClick={() => navigate('/Ressetpw')}>Qu??n m???t kh???u?</span>
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

export default Login;
