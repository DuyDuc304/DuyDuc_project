import React from 'react';
import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';


class AddDevice extends React.Component {
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
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <form autoComplete='off' >
                        <div className='add-device'>
                            <p className='text-tttb'>Thông tin thiết bị</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mã thiết bị:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='MaThietBi' placeholder="Nhập mã thiết bị"></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên thiết bị:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenThietBi' placeholder="Nhập tên thiết bị"></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Địa chỉ IP:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='DiaChiIP' placeholder="Nhập địa chỉ IP"></input>
                                    </div>
                                </div>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Loại thiết bị:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <div className='box' style={{ width: '540px' }} onClick={() => this.show('tdv', 'up', 'down')}>
                                            <input name='LoaiThietBi' id='ip' placeholder="Chọn loại thiêt bị" style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                            <a className='box-button' style={{ marginLeft: '500px', position: 'absolute', cursor: 'pointer' }} id='down'><TiArrowSortedDown /></a>
                                            <a className='box-button' style={{ marginLeft: '500px', position: 'absolute', cursor: 'pointer', display: 'none' }} id='up' ><TiArrowSortedUp /></a>
                                        </div>

                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên đăng nhập:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenDangNhap' placeholder="Nhập tên đăng nhập"></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mật khẩu:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='MatKhau' placeholder="Nhập mật khẩu"></input>
                                    </div>
                                    <div id='tdv' className='select-drop-down' onClick={() => this.show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '590px', marginTop: '74px' }}>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('kiosk', 'ip')}><a id='kiosk'>Kiosk</a></div>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('ht', 'ip')}><a id='ht'>Hệ thống</a></div>

                                    </div>
                                </div>
                            </div>

                            <p className='text-dvsd'>Dịch vụ sử dụng</p>
                            <div className='input-dvsd'>
                                <input type="text" name='DichVuSuDUng' placeholder="Nhập dịch vụ sử dụng"></input>
                            </div>
                            <div className='row-ttbc'><p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p><p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                        </div>
                        <div className='buton-device'>
                            <a href="/Device" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Thêm thiêt bị</button>
                        </div>
                    </form>
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='Danh sách thiết bị ﹥' nametitle3=' Thêm thiêt bị' href='/Device' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default AddDevice;


