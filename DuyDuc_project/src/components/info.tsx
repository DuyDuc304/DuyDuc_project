import React from 'react';
import { FiCamera } from 'react-icons/fi';
import { Menubar } from './layout/menubar';
import { Topbar } from './layout/topbar';

class Info extends React.Component {
    setvalue() {
        const tnd: any = document.getElementById('tnd')
        tnd.value = 'Nguyễn Duy Đức';
        const name: any = document.getElementById('name')
        name.innerText = tnd.value
        const sdt: any = document.getElementById('sdt')
        sdt.value = '0379439568';
        const mail: any = document.getElementById('email')
        mail.value = 'ducpy30042000@gmail.com';
        const ttk: any = document.getElementById('ttk')
        ttk.value = 'duc304';
        const mk: any = document.getElementById('mk')
        mk.value = 'Ducvippro';
        const vt: any = document.getElementById('vt')
        vt.value = 'SuperAdmin';
    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp" onLoad={() => this.setvalue()}>
                    <form autoComplete="off">
                        <div className='info'>
                            <img id='avt' src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt='avata' />
                            <a href="/Info"><div className='camera'><FiCamera className='iconcamera' /></div></a>
                            <label id='name' className='username'></label>
                            <div className='infouser'>
                                <div className='infocol'>
                                    <div className='itemcol'>
                                        <label>Tên người dùng</label>
                                        <input id='tnd' type="text" name='TenNguoiDung' ></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Số điện thoại</label>
                                        <input id='sdt' type="number" name='SoDienThoai' ></input>
                                    </div><div className='itemcol'>
                                        <label>Email</label>
                                        <input id='email' type="text" name='Email' ></input>
                                    </div>
                                </div>
                                <div className='infocol'>
                                    <div className='itemcol'>
                                        <label>Tên tài khoản</label>
                                        <input name='TenTaiKhoan' type="text" id='ttk'></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Mật khẩu</label>
                                        <input name='MatKhau' type="text" id='mk' ></input>
                                    </div>
                                    <div className='itemcol'>
                                        <label>Vai Trò</label>
                                        <input name='VaiTro' type="text" id='vt' ></input>
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


