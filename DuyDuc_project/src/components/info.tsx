import React from 'react';

import { Topbar } from './layout/topbar';
import { FiCamera } from "react-icons/fi";
import { Menubar } from './layout/menubar';


class Info extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <form>
                        <div className='info'>
                            <img src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt='avata' />
                            <a href="/Info"><div className='camera'><FiCamera className='iconcamera' /></div></a>
                            <label className='username'>Nguyễn Duy Đức</label>
                            <div className='infouser'>
                                <div className='infocol'>
                                    <div className='itemcol'>
                                        <label>Tên người dùng</label>
                                        <input name='TenNguoiDung' value={"Nguyễn Duy Đức"}></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Số điện thoại</label>
                                        <input name='SoDienThoai' value={"0379439568"}></input>
                                    </div><div className='itemcol'>
                                        <label>Email</label>
                                        <input name='Email' value={"ducpro30042k@gmail.com"}></input>
                                    </div>
                                </div>
                                <div className='infocol'>
                                    <div className='itemcol'>
                                        <label>Tên tài khoản</label>
                                        <input name='TenTaiKhoan' type="text" id='username' value={"ducpro30042k"}></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Mật khẩu</label>
                                        <input name='MatKhau' type="text" id='password' value={"Ducvippro"}></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Vai Trò</label>
                                        <input name='VaiTro' type="text" id='vaitro' value={"Kế Toán"}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                    <Topbar nametitle1='' nametitle2='' nametitle3='Thông tin cá nhân' href='' href2='' nametitle21='' />
                    <Menubar buttonid="" />
                </div>
            </div>
        );

    }

}
export default Info;


