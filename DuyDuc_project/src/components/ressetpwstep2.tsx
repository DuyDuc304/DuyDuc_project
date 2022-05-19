import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';

import { Link } from 'react-router-dom';


class RessetPWStep2 extends React.Component {
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
                                    <label >Đặt lại mật khẩu mới</label>
                                    <div >

                                        <br />
                                        <p >Mật khẩu*</p>
                                        <input type="text" id="name" name='name'></input>
                                        <p >Nhập lại mật khẩu*</p>
                                        <input type="password" id="password" name='password'></input>

                                    </div>
                                    <br />
                                    <br />
                                    <div className='rowbtn'>
                                        <div className='magin'>
                                            <Link to="/login">
                                                <div>
                                                    <button type='submit'>Xác nhận</button>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='imagedangnhap'>
                        <div className='hinh'>
                            <img src={ressetpw} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RessetPWStep2;
