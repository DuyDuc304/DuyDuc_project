import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';


import { FiEye, FiEyeOff } from 'react-icons/fi';

class RessetPW extends React.Component {
    showpw(ip: string, eyeshow: string, eyehide: string) {
        const show: any = document.getElementById(eyeshow)
        const hide: any = document.getElementById(eyehide)
        const eye: any = document.getElementById(ip)
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
    checpw(e: React.SyntheticEvent) {
        e.preventDefault();
        const br: any = document.getElementById('br')
        const wn: any = document.getElementById('warning')
        const pw: any = document.getElementById('pass1')
        const pw1: any = document.getElementById('pass2')
        const target = e.target as typeof e.target & {
            password1: { value: string };
            password2: { value: string };
        };
        const password1 = target.password1.value.trim();
        const password2 = target.password2.value.trim();
        if (password2 !== '' && password1 !== '') {
            if (password2 === password1) {
                var login = document.location.href = "/Login";
                return (login);
            }
            else {
                wn.innerText = 'Mật khẩu không trùng khớp'
                pw.style.border = "1.5px solid red"
                pw1.style.border = "1.5px solid red"
                br.style.display = 'none'
            }
        } else {
            wn.innerText = 'Mật khẩu không được để trống'
            pw.style.border = "1.5px solid red"
            pw1.style.border = "1.5px solid red"
            br.style.display = 'none'
        }

    }

    changeform(e: React.SyntheticEvent) {
        e.preventDefault();
        const br: any = document.getElementById('br1')
        const mail: any = document.getElementById('email')
        const wn: any = document.getElementById('warning1')
        const resetpw: any = document.querySelector(".resetpw")
        const restpwstep2: any = document.querySelector(".resetpwstep2")
        const target = e.target as typeof e.target & {
            email: { value: string };

        };
        const email = target.email.value.trim();
        if (email !== '') {
            if (email === 'duc@gmail.com') {
                restpwstep2.style.display = 'block';
                resetpw.style.display = 'none';
            } else {
                wn.innerText = 'Email không thuộc bất kì tài khoản nào'
                br.style.display = 'none'
                mail.style.border = "1.5px solid red"
            }
        } else {
            wn.innerText = 'Email không được để trống '
            br.style.display = 'none'
            mail.style.border = "1.5px solid red"
        }

    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div>
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='resetpw'>
                            <div className='myform'>
                                <form onSubmit={this.changeform} autoComplete="off">
                                    <div className='col2'>
                                        <div className='align-text'>
                                            <label>Đặt lại mật khẩu</label>

                                            <br id='br1' />
                                            <p id='warning1' style={{ color: 'red', fontSize: '14px' }}></p>
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
                        <div className='resetpwstep2' style={{ display: 'none' }}>
                            <div className='myform'>
                                <form autoComplete="off" onSubmit={this.checpw}>
                                    <div className='col2'>
                                        <label >Đặt lại mật khẩu mới</label>
                                        <div >
                                            <br id='br' />
                                            <p id='warning' style={{ color: 'red', fontSize: '14px' }}></p>
                                            <p >Mật khẩu *</p>

                                            <div className='row-myform' id='pass1'>
                                                <input className='input-have-eye' type="password" id="pw" name='password1' placeholder="Nhập mật khẩu"></input>
                                                <label style={{ fontSize: '18px' }} className='button-eye' onClick={() => this.showpw('pw', 'show', 'hide')} id='eye'> <FiEyeOff className='icon-eye' id='show' /> <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} /></label>
                                            </div>
                                            <p >Nhập lại mật khẩu *</p>

                                            <div className='row-myform' id='pass2'>
                                                <input className='input-have-eye' type="password" id="pw1" name='password2' placeholder="Nhập mật khẩu"></input>
                                                <label style={{ fontSize: '18px' }} className='button-eye' onClick={() => this.showpw('pw1', 'show1', 'hide1')} id='eye'> <FiEyeOff className='icon-eye' id='show1' /> <FiEye className='icon-eye' id='hide1' style={{ display: 'none' }} /></label>
                                            </div>


                                        </div>
                                        <br />
                                        <br />
                                        <div className='rowbtn'>
                                            <div className='magin'>

                                                <button className='myform-button' > Xác nhận</button>

                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                    <div className='imagedangnhap'>
                        <div className='hinh'>
                            <img src={ressetpw} alt='ressetpw' />
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}
export default RessetPW;
