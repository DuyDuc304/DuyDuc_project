import React from 'react';
import { FiCamera } from 'react-icons/fi';
import { Menubar } from '../components/menu/menubar';
import { Topbar } from '../components/topbar';

class Info extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp" >
                    <form autoComplete="off">
                        <div className='info'>
                            <img id='avt' src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt='avata' />
                            <a href="/Info"><div className='camera'><FiCamera className='iconcamera' /></div></a>
                            <label id='name' className='username'>Nguyễn Duy Đức</label>
                            <div className='infouser'>
                                <div className='infocol'>
                                    <div className='itemcol'>
                                        <label>Tên người dùng</label>
                                        <input readOnly id='tnd' type="text" value={'Nguyễn Duy Đức'} name='TenNguoiDung' ></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Số điện thoại</label>
                                        <input readOnly id='sdt' type="number" value={'0379439568'} name='SoDienThoai' ></input>
                                    </div><div className='itemcol'>
                                        <label>Email</label>
                                        <input readOnly id='email' type="email" value={'ducpt30042000@gmail.com'} name='Email' ></input>
                                    </div>
                                </div>
                                <div className='infocol'>
                                    <div className='itemcol'>
                                        <label>Tên tài khoản</label>
                                        <input readOnly name='TenTaiKhoan' value={'duc30042k'} type="text" id='ttk'></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Mật khẩu</label>
                                        <input readOnly name='MatKhau' value={'DucVipPro'} type="text" id='mk' ></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Vai Trò</label>
                                        <input readOnly name='VaiTro' value={'SuperAdmin'} type="text" id='vt' ></input>
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

}
export default Info;


