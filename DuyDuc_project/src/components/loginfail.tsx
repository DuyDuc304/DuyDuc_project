import React from 'react';
import logo from './images/logo.svg';
import htqlxh from './images/htqlxh.svg';

import { BiErrorCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';


class Loginfail extends React.Component {
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
                                <div className='col1'>
                                    <p >Tên đăng nhập*</p>
                                    <input type="text" id="name" name='name'></input>
                                    <p >Mật khẩu*</p>
                                    <input type="password" id="password" name='password' ></input>
                                    <div>
                                        <a> <BiErrorCircle style={{ color: 'red', fontSize: '16px' }} /> Sai mật khẩu và hoặc tên đăng nhập</a></div>
                                </div>
                                <div className='col2'>
                                    <button type='submit'>Đăng nhập</button>
                                    <div><Link to={'/ressetpw'}>Quên mật khẩu?</Link></div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className='imagedangnhap'>
                        <div className='hinh'>
                            <img src={htqlxh} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Loginfail;
