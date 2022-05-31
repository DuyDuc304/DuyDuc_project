import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';


import { FiEye, FiEyeOff } from 'react-icons/fi';

class RessetPW extends React.Component {
    showpw() {
        const show: any = document.getElementById('show')
        const hide: any = document.getElementById('hide')
        const eye: any = document.getElementById('pw')
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


    changeform(e: React.SyntheticEvent) {
        e.preventDefault();

        const resetpw: any = document.querySelector(".login")
        const restpwstep2: any = document.querySelector(".loginfail")
        restpwstep2.style.display = 'block';
        resetpw.style.display = 'none';
    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div>
                        <div className='logo'>
                            <img src={logo} />
                        </div>
                        <div className='login'>
                            <div className='myform'>
                                <form onSubmit={this.changeform}>
                                    <div className='col2'>
                                        <div className='align-text'>
                                            <label>Đặt lại mật khẩu</label>
                                            <br />
                                            <p >Vui lòng nhâp email để lấy lại mật khẩu của bạn *</p>
                                            <input className='input-myform' type="email" id="email" name='email' placeholder="Nhập email đã đăng ký"></input>
                                            <br />
                                            <br />
                                            <div className='rowbtn'>
                                                <a href="/login" className='button-huy' style={{ background: '#F7F7F7' }} > Hủy</a>
                                                <button className='myform-button ' type='submit'>Tiếp tục</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='loginfail'>
                            <div className='myform'>
                                <form>
                                    <div className='col2'>
                                        <label >Đặt lại mật khẩu mới</label>
                                        <div >

                                            <br />
                                            <p >Mật khẩu *</p>

                                            <div className='row-myform'>
                                                <input className='input-have-eye' type="password" id="pw" name='password' placeholder="Nhập mật khẩu"></input>
                                                <a className='button-eye' onClick={this.showpw} id='eye'> <FiEyeOff className='icon-eye' id='show' /> <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} /></a>
                                            </div>
                                            <p >Nhập lại mật khẩu *</p>

                                            <div className='row-myform'>
                                                <input className='input-have-eye' type="password" id="pw1" name='password' placeholder="Nhập mật khẩu"></input>
                                                <a className='button-eye' onClick={this.showpw1} id='eye'> <FiEyeOff className='icon-eye' id='show1' /> <FiEye className='icon-eye' id='hide1' style={{ display: 'none' }} /></a>
                                            </div>


                                        </div>
                                        <br />
                                        <br />
                                        <div className='rowbtn'>
                                            <div className='magin'>

                                                <a href="/Login" className='myform-button' > Xác nhận</a>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                    <div className='imagedangnhap'>
                        <div className='hinh'>
                            <img src={ressetpw} />
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}
export default RessetPW;
