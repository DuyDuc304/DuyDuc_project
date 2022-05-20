import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';
import { Link } from 'react-router-dom';


class RessetPW extends React.Component {
    changeform(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
        };
        const email = target.email.value;
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
                                            <p >Vui lòng nhâp email để lấy lại mật khẩu của bạn*</p>
                                            <input type="email" id="email" name='email' ></input>
                                            <br />
                                            <br />
                                            <div className='rowbtn'>
                                                <a href="/login" className='button-huy' > Hủy</a>
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
                                            <p >Mật khẩu*</p>
                                            <input type="password" id="password1" name='password1'></input>
                                            <p >Nhập lại mật khẩu*</p>
                                            <input type="password" id="password2" name='password2'></input>

                                        </div>
                                        <br />
                                        <br />
                                        <div className='rowbtn'>
                                            <div className='magin'>

                                                <a href="/login" className='myform-button' > Xác nhận</a>

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
