import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { IoMdClose } from "react-icons/io";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

class UpdateDevice extends React.Component {
    showmore() {

        const btn: any = document.getElementById('dd')
        if (btn.style.display === 'none')
            btn.style.display = 'flex';

        document.addEventListener("mousedown", (event) => {
            btn.style.display = 'none';
        })

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
        if (ip.style.display == 'none') {
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
                                        <input type="text" name='MaThietBi' placeholder="Nhập mã thiết bị" value={"KIO_01"}></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên thiết bị:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenThietBi' placeholder="Nhập tên thiết bị" value={"Kiosk"}></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Địa chỉ IP:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='DiaChiIP' placeholder="Nhập địa chỉ IP" value={"128.172.380"}></input>
                                    </div>
                                </div>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Loại thiết bị:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <div className='box' style={{ width: '540px' }}>
                                            <input name='LoaiThietBi' onClick={() => this.show('tdv', 'up', 'down')}
                                                id='ip' value={'Kiosk'}
                                                style={{ fontSize: '16px', width: '500px' }}></input>
                                            <a className='box-button' onClick={() => this.show('tdv', 'up', 'down')}
                                                style={{ marginLeft: '500px', position: 'absolute' }}
                                                id='down'>
                                                <TiArrowSortedDown />
                                            </a>
                                            <a className='box-button' onClick={() => this.show('tdv', 'up', 'down')}
                                                style={{ marginLeft: '500px', position: 'absolute', display: 'none' }}
                                                id='up' >
                                                <TiArrowSortedUp />
                                            </a>
                                        </div>

                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên đăng nhập:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenDangNhap' placeholder="Nhập tên đăng nhập" value={'linkkyo011'}></input>
                                    </div>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mật khẩu:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='MatKhau' placeholder="Nhập mật khẩu" value={"CMS"}></input>
                                    </div>
                                    <div id='tdv' className='select-drop-down' onClick={() => this.show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '590px', marginTop: '74px' }}>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('kiosk', 'ip')}><a id='kiosk'>Kiosk</a></div>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => this.Chose('ht', 'ip')}><a id='ht'>Hệ thống</a></div>

                                    </div>
                                </div>
                            </div>

                            <p className='text-dvsd'>Dịch vụ sử dụng</p>
                            <div className='div-dvsd' id='dvsd' onClick={this.showmore} >
                                <div className='dvcc'>
                                    <p>Khám tim mạch </p>
                                    <IoMdClose className='icon-delete' />
                                </div>
                                <div className='dvcc'>
                                    <p>Khám phụ khoa </p>
                                    <IoMdClose className='icon-delete' />
                                </div>
                                <div className='dvcc'>
                                    <p>Khám răng hàm mặt </p>
                                    <IoMdClose className='icon-delete' />
                                </div>
                                <div className='dvcc'>
                                    <p>Khám tai mũi họng</p>
                                    <IoMdClose className='icon-delete' />
                                </div>
                                <div className='dvcc'>
                                    <p>Khám hô hấp </p>
                                    <IoMdClose className='icon-delete' />
                                </div>
                                <div className='dvcc'>
                                    <p>Khám tổng quát  </p>
                                    <IoMdClose className='icon-delete' href='#' />
                                </div>
                            </div>

                            <div className='row-ttbc'><p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p><p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                        </div>
                        <div className='buton-device'>
                            <a href="/Device" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Thêm thiêt bị</button>
                        </div>
                    </form>
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='Danh sách thiết bị ﹥' nametitle3=' Cập nhật thiết bị' href='/Device' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />
                    <div id='dd' className='dd'>
                        <div className='dropdown-device' id="style-2">
                            <div className='dropdown-device-item '>Tất cả </div>
                            <div className='dropdown-device-item '>Khám tim mạch </div>
                            <div className='dropdown-device-item '>Khám phụ khoa</div>
                            <div className='dropdown-device-item '>Khám răng hàm mặt</div>
                            <div className='dropdown-device-item '>Khám tai mũi họng</div>
                            <div className='dropdown-device-item '>Khám hô hấp</div>
                            <div className='dropdown-device-item '>Khám tổng quát  </div>
                        </div>
                    </div>

                </div>
            </div >
        );

    }


}

export default UpdateDevice;


