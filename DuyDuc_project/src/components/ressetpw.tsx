import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';
import { Link } from 'react-router-dom';


class RessetPW extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div>
                        <div className='logo'>
                            <img src={logo} />
                        </div>
                        <div className='myform'>
                            <form>
                                <div className='col2'>
                                    <div className='align-text'>
                                        <label>Đặt lại mật khẩu</label>
                                        <br />
                                        <p >Vui lòng nhâp email để lấy lại mật khẩu của bạn*</p>
                                        <input type="email" id="email" name='email' ></input>
                                        <br />
                                        <br />
                                        <div className='rowbtn'>
                                            <Link to="/login" >
                                                <div className='buttonhuy'>
                                                    <button >Hủy</button >
                                                </div>
                                            </Link>
                                            <div className='magin'>
                                                <Link to="/ressetpwstep2">
                                                    <div >
                                                        <button type='submit'>Xác nhận</button>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
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
