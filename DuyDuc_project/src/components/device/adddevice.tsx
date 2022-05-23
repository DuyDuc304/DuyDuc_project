import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';


class AddDevice extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <form >
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

                                        <select className='select-type-device' name='LoaiThietbi' >
                                            <option value="Kiosk">Kiosk</option>
                                            <option value="Displaycounter">Display counter</option>

                                        </select>

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
                                </div>
                            </div>

                            <p className='text-dvsd'>Dịch vụ sử dụng</p>
                            <div className='input-dvsd'>
                                <input type="text" name='DichVuSuDUng' placeholder="Nhập dịch vụ sử dụng"></input>
                            </div>
                            <div className='row-ttbc'><p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p><p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
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


