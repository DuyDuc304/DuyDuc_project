import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class UpdateAccountUser extends React.Component {
    setvalue() {
        const ht: any = document.getElementById('ht')
        ht.value = 'Nguyễn Duy Đức';
        const sdt: any = document.getElementById('sdt')
        sdt.value = '0379439567';
        const mail: any = document.getElementById('email')
        mail.value = 'ducpy30042000@gmail.com';
        const vt: any = document.getElementById('ip')
        vt.value = 'Kế toán';
        const tdn: any = document.getElementById('tdn')
        tdn.value = 'ducpy';
        const mk: any = document.getElementById('pw')
        mk.value = 'Duc30042k';
        const mk2: any = document.getElementById('pw1')
        mk2.value = 'Duc30042k';
        const tt: any = document.getElementById('iptt')
        tt.value = 'Hoạt động';
    }
    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    show = (id: string, u: string, d: string) => {
        const ip: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (ip.style.display === 'none') {
            ip.style.display = 'block';
            up.style.display = 'flex';
            down.style.display = 'none';
        } else {
            ip.style.display = 'none';
            down.style.display = 'flex';
            up.style.display = 'none';
        }
    }
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
                <div className="Backgroundapp" onLoad={() => this.setvalue()}>
                    <form autoComplete="off" >
                        <div className='add-device'>
                            <p className='text-tttb'>Thông tin tài khoản</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Họ tên:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id="ht" type="text" name='HoTen' placeholder="Nhập họ và tên" ></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Số điện thoại:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id="sdt" type="text" name='SoDienThoai' placeholder="Nhập số điện thoại" ></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Email:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id="email" type="email" name='Email' placeholder="Nhập email" ></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Vai trò:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <div className='box' style={{ width: '540px' }}>
                                            <input name='VaiTro' onClick={() => this.show('tdv', 'up', 'down')} id='ip' style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                            <label className='box-button' onClick={() => this.show('tdv', 'up', 'down')} style={{ marginLeft: '500px', position: 'absolute' }} id='down'><TiArrowSortedDown /></label>
                                            <label className='box-button' onClick={() => this.show('tdv', 'up', 'down')} style={{ marginLeft: '500px', position: 'absolute', display: 'none' }} id='up' ><TiArrowSortedUp /></label>
                                        </div>
                                        <div id='tdv' className='select-drop-down' onClick={() => this.show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '24px', marginTop: '348px' }}>
                                            <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('kt', 'ip')}><label id='kt'>Kế toán</label></div>
                                            <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('ql', 'ip')}><label id='ql'>Quản lý</label></div>
                                            <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('ad', 'ip')}><label id='ad'>Admin</label></div>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên đăng nhập:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id="tdn" type="text" name='TenDangNhap' placeholder="Nhập tên đăng nhập"></input>

                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mật khẩu:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input className='row-password-input' type="password" id="pw" name='password' placeholder="Nhập mật khẩu" ></input>
                                        <label style={{ fontSize: '18px' }} className='input-have-eye-account' onClick={this.showpw} id='eye'> <FiEyeOff className='icon-eye' id='show' /> <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} /></label>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Nhập lại mật khẩu:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input className='row-password-input' type="password" id="pw1" name='password2' placeholder="Nhập mật khẩu" ></input>
                                        <label style={{ fontSize: '18px' }} className='input-have-eye-account' onClick={this.showpw1} id='eye'> <FiEyeOff className='icon-eye' id='show1' /> <FiEye className='icon-eye' id='hide1' style={{ display: 'none' }} /></label>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tình trạng:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <div className='box' style={{ width: '540px' }}>
                                            <input name='TinhTrang' onClick={() => this.show('tt', 'up1', 'down1')} id='iptt' style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                            <label className='box-button' onClick={() => this.show('tt', 'up1', 'down1')} style={{ marginLeft: '500px', position: 'absolute' }} id='down1'><TiArrowSortedDown /></label>
                                            <label className='box-button' onClick={() => this.show('tt', 'up1', 'down1')} style={{ marginLeft: '500px', position: 'absolute', display: 'none' }} id='up1' ><TiArrowSortedUp /></label>
                                        </div>
                                        <div id='tt' className='select-drop-down' onClick={() => this.show('tt', 'up1', 'down1')} style={{ width: '540px', marginLeft: '590px', marginTop: '348px' }}>
                                            <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('tc', 'iptt')}><label id='tc'>Tất cả</label></div>
                                            <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('nhd', 'iptt')}><label id='nhd'>Ngừng hoạt động</label></div>
                                            <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('hd', 'iptt')}><label id='hd'>Hoạt động</label></div>
                                        </div>
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