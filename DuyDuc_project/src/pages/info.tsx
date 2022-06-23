import React from 'react';
import { FiCamera } from 'react-icons/fi';
import { Menubar } from '../components/menu/menubar';
import { Topbar } from '../components/topbar';
import { useSelector } from "react-redux";
const Info = () => {
    const userInfo = useSelector((state: any) => state.user);
    return (
        <div className='bg'>
            <div className="Backgroundapp" >
                <form autoComplete="off">
                    <div className='info'>
                        <img id='avt' src={userInfo.Avatar} alt='avata' />
                        <a href="/Info"><div className='camera'><FiCamera className='iconcamera' /></div></a>
                        <label id='name' className='username'>{userInfo.Name}</label>
                        <div className='infouser'>
                            <div className='infocol'>
                                <div className='itemcol'>
                                    <label>Tên người dùng</label>
                                    <input readOnly id='tnd' type="text" value={userInfo.Name} name='TenNguoiDung' ></input>
                                </div>
                                <div className='itemcol'>
                                    <label>Số điện thoại</label>
                                    <input readOnly id='sdt' type="number" value={userInfo.Phone} name='SoDienThoai' ></input>
                                </div><div className='itemcol'>
                                    <label>Email</label>
                                    <input readOnly id='email' type="email" value={userInfo.Email} name='Email' ></input>
                                </div>
                            </div>
                            <div className='infocol'>
                                <div className='itemcol'>
                                    <label>Tên tài khoản</label>
                                    <input readOnly name='TenTaiKhoan' value={userInfo.UserName} type="text" id='ttk'></input>
                                </div>
                                <div className='itemcol'>
                                    <label>Mật khẩu</label>
                                    <input readOnly name='MatKhau' value={userInfo.Password} type="text" id='mk' ></input>
                                </div>
                                <div className='itemcol'>
                                    <label>Vai Trò</label>
                                    <input readOnly name='VaiTro' value={userInfo.Role} type="text" id='vt' ></input>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>


                <Topbar nametitle1='' nametitle2='' nametitle3='Thông tin cá nhân' href='' href2='' nametitle21='' />
                <Menubar buttonid='a' />
            </div>
        </div>
    );

}


export default Info;


