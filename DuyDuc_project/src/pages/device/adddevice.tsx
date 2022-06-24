import React from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';


const AddDevice = () => {
    const navigate = useNavigate()
    function add(id: string) {
        const dvsd: any = document.getElementById('dvsd')
        const goiy: any = document.getElementById('textcdvsd')
        const chose: any = document.getElementById(id)
        const dvcc: any = document.createElement('div')
        dvcc.id = chose.id
        dvcc.className = 'dvcc'
        const p: any = document.createElement('p')
        p.innerText = chose.innerText
        const icon: any = document.createElement('label')
        icon.innerText = '× '
        icon.className = 'icon-delete'
        icon.onclick = function () {
            const elem: any = document.getElementById(id);
            dvsd.removeChild(elem)
            chose.style.display = 'flex'
        }
        dvcc.appendChild(p)
        dvcc.appendChild(icon)
        dvsd.appendChild(dvcc)
        chose.style.display = 'none'
        goiy.style.display = 'none'
    }
    function showmore() {

        const btn: any = document.getElementById('dd')
        if (btn.style.display === 'none')
            btn.style.display = 'flex';
        else {
            btn.style.display = 'none'
        }


    }
    function Chose(id: string, input: string) {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    function show(id: string, u: string, d: string) {
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
                                    <div className='box' style={{ width: '540px' }} onClick={() => show('tdv', 'up', 'down')}>
                                        <input readOnly name='LoaiThietBi' id='ip' placeholder="Chọn loại thiêt bị" style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                        <label className='box-button' style={{ marginLeft: '500px', position: 'absolute', cursor: 'pointer' }} id='down'><TiArrowSortedDown /></label>
                                        <label className='box-button' style={{ marginLeft: '500px', position: 'absolute', cursor: 'pointer', display: 'none' }} id='up' ><TiArrowSortedUp /></label>
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
                                <div id='tdv' className='select-drop-down' onClick={() => show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '590px', marginTop: '74px' }}>
                                    <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('kiosk', 'ip')}><label id='kiosk'>Kiosk</label></div>
                                    <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('ht', 'ip')}><label id='ht'>Hệ thống</label></div>

                                </div>
                            </div>
                        </div>

                        <p className='text-dvsd'>Dịch vụ sử dụng</p>
                        <div className='div-dvsd' id='dvsd' onClick={showmore} style={{ border: '1.5px solid #A9A9B0' }} >
                            <p className='goiy' id='textcdvsd'>Nhập dịch vụ sử dụng</p>
                        </div>
                        <div className='row-ttbc'><p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p><p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                    </div>
                    <div className='buton-device'>
                        <span className='button-huy' onClick={() => navigate('/Device')} > Hủy bỏ</span>
                        <button className='myform-button ' type='submit'>Thêm thiêt bị</button>
                    </div>
                </form>
                <div className='title-report-type'>Quản lý thiết bị</div>
                <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='Danh sách thiết bị ﹥' nametitle3=' Thêm thiêt bị' href='/Device' href2='' nametitle21='' />
                <Menubar buttonid="tb" />
                <div id='dd' className='dd'>
                    <div className='dropdown-device' id="style-2">
                        <div id='ktm' className='dropdown-device-item ' onClick={() => add('ktm')}>Khám tim mạch </div>
                        <div id='kpk' className='dropdown-device-item ' onClick={() => add('kpk')}>Khám sản - phụ khoa</div>
                        <div id='krhm' className='dropdown-device-item ' onClick={() => add('krhm')}>Khám răng hàm mặt</div>
                        <div id='ktmh' className='dropdown-device-item ' onClick={() => add('ktmh')}>Khám tai mũi họng</div>
                        <div id='khh' className='dropdown-device-item ' onClick={() => add('khh')}>Khám hô hấp</div>
                        <div id='ktq' className='dropdown-device-item ' onClick={() => add('ktq')}>Khám tổng quát  </div>
                        <p className='enddata'>No more data</p>
                    </div>
                </div>
            </div>
        </div>
    );

}




export default AddDevice;


