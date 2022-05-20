import React from 'react';

import { Topbar } from './topbar';
import { FiCamera } from "react-icons/fi";
import { Menubar } from './menubar';


class Info extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Thông tin cá nhân' />
                    <Menubar buttonid="" />
                    <div className='info'>
                        <img src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt='avata' />
                        <a href="#"><div className='camera'><FiCamera className='iconcamera' /></div></a>
                        <label className='username'>Nguyễn Duy Đức</label>
                        <div className='infouser'>
                            <div className='infocol'>
                                <div className='itemcol'>
                                    <label>Tên người dùng</label>
                                    <input value={"Nguyễn Duy Đức"}></input>
                                </div>
                                <div className='itemcol'>
                                    <label>Số điện thoại</label>
                                    <input value={"0379439568"}></input>
                                </div><div className='itemcol'>
                                    <label>Email</label>
                                    <input value={"ducpro30042k@gmail.com"}></input>
                                </div>
                            </div>
                            <div className='infocol'>
                                <div className='itemcol'>
                                    <label>Tên tài khoản</label>
                                    <input type="text" id='username' value={"ducpro30042k"}></input>
                                </div>
                                <div className='itemcol'>
                                    <label>Mật khẩu</label>
                                    <input type="text" id='password' value={"Ducvippro"}></input>
                                </div>
                                <div className='itemcol'>
                                    <label>Vai Trò</label>
                                    <input type="text" id='vaitro' value={"Kế Toán"}></input>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

    }

}
export default Info;


