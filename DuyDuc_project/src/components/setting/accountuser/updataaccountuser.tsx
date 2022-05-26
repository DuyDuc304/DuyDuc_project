import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class UpdateAccountUser extends React.Component {
    showpw() {
        const show: any = document.getElementById('show')
        const hide: any = document.getElementById('hide')
        const eye: any = document.getElementById('pw')
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
            show.style.display = 'block';
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'block';
            show.style.display = 'none';
        }
    }
    showpw1() {
        const show: any = document.getElementById('show1')
        const hide: any = document.getElementById('hide1')
        const eye: any = document.getElementById('pw1')
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
            show.style.display = 'block';
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'block';
            show.style.display = 'none';
        }
    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <form >
                        <div className='add-device'>
                            <p className='text-tttb'>Thông tin tài khoản</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Họ tên:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='HoTen' placeholder="Nhập họ và tên" value={'Nguyễn Duy Đức'}></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Số điện thoại:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='SoDienThoai' placeholder="Nhập số điện thoại" value={'0379439567'}></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Email:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="email" name='Email' placeholder="Nhập email" value={'ducpy30042000@gmail'}></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Vai trò:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <select className='select-type-device' name='Vaitro' >
                                            <option value="KeToan">Kế toán</option>
                                            <option value="QuanLy">Quản lý</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên đăng nhập:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenDangNhap' placeholder="Nhập tên đăng nhập" value={'ducpy'}></input>

                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mật khẩu:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input className='row-password-input' type="password" id="pw" name='password' placeholder="Nhập mật khẩu" value={'Duc30042k'}></input>
                                        <a className='input-have-eye-account' onClick={this.showpw} id='eye'> <FiEyeOff className='icon-eye' id='show' /> <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} /></a>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Nhập lại mật khẩu:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input className='row-password-input' type="password" id="pw1" name='password2' placeholder="Nhập mật khẩu" value={'Duc30042k'}></input>
                                        <a className='input-have-eye-account' onClick={this.showpw1} id='eye'> <FiEyeOff className='icon-eye' id='show' /> <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} /></a>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tình trạng:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <select className='select-type-device' name='TinhTrang' >
                                            <option value="all">Tất cả</option>
                                            <option value="act">Hoạt động</option>
                                            <option value="unact">Ngừng hoạt đông</option>

                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className='row-ttbc'><p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p><p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                        </div>
                        <div className='buton-device'>
                            <a href="/AccountUser" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Cập nhật</button>
                        </div>
                    </form>
                    <div className='title-report-type'>Quản lý tài khoản</div>
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='Quản lý tài khoản ﹥' nametitle3='Cập nhật tài khoản' href='/AccountUser' href2='' nametitle21='' />
                    <Menubar buttonid="qltk" />
                </div>
            </div>
        )
    }
}
export default UpdateAccountUser;