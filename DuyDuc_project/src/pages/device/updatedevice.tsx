import React from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';



const UpdateDevice = () => {
    const navigate = useNavigate()
    function remove(id: string) {
        const dvsd: any = document.getElementById('dvsd')
        const chose: any = document.getElementById(id)
        const elem: any = document.getElementById(id);
        dvsd.removeChild(elem)
        chose.style.display = 'flex'
    }
    function add(id: string) {
        const dvsd: any = document.getElementById('dvsd')
        const chose: any = document.getElementById(id)
        const dvcc: any = document.createElement('div')
        dvcc.id = chose.id + '1'
        dvcc.className = 'dvcc'
        const p: any = document.createElement('p')
        p.innerText = chose.innerText
        const icon: any = document.createElement('label')
        icon.innerText = '× '
        icon.className = 'icon-delete'
        icon.onclick = function () {
            const elem: any = document.getElementById(id + '1');
            dvsd.removeChild(elem)
            chose.style.display = 'flex'
        }
        dvcc.appendChild(p)
        dvcc.appendChild(icon)
        dvsd.appendChild(dvcc)
        chose.style.display = 'none'
    }
    function setvalue() {
        const mtb: any = document.getElementById('mtb')
        mtb.value = "KIO_01"
        const ttb: any = document.getElementById('ttb')
        ttb.value = "kiosk"
        const dcip: any = document.getElementById('dcip')
        dcip.value = "192.168.1.10"
        const ltb: any = document.getElementById('ip')
        ltb.value = "Kiosk"
        const tdn: any = document.getElementById('tdn')
        tdn.value = "ducpy3004"
        const mk: any = document.getElementById('mk')
        mk.value = "CMS"
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
            <div className="Backgroundapp" onLoad={() => setvalue()}>
                <form autoComplete='off'>
                    <div className='add-device'>
                        <p className='text-tttb'>Thông tin thiết bị</p>

                        <div className='row-update-device'>
                            <div className='col-update-device'>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Mã thiết bị:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input id='mtb' type="text" name='MaThietBi' placeholder="Nhập mã thiết bị" ></input>
                                </div>

                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Tên thiết bị:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input id='ttb' type="text" name='TenThietBi' placeholder="Nhập tên thiết bị" ></input>
                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Địa chỉ IP:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input id='dcip' type="text" name='DiaChiIP' placeholder="Nhập địa chỉ IP" ></input>
                                </div>
                            </div>
                            <div className='col-update-device'>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Loại thiết bị:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <div className='box' style={{ width: '540px' }}>
                                        <input readOnly name='LoaiThietBi' onClick={() => show('tdv', 'up', 'down')}
                                            id='ip'
                                            style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                        <label className='box-button' onClick={() => show('tdv', 'up', 'down')}
                                            style={{ marginLeft: '500px', position: 'absolute' }}
                                            id='down'>
                                            <TiArrowSortedDown />
                                        </label>
                                        <label className='box-button' onClick={() => show('tdv', 'up', 'down')}
                                            style={{ marginLeft: '500px', position: 'absolute', display: 'none' }}
                                            id='up' >
                                            <TiArrowSortedUp />
                                        </label>
                                    </div>

                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Tên đăng nhập:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input id='tdn' type="text" name='TenDangNhap' placeholder="Nhập tên đăng nhập" ></input>
                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Mật khẩu:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input id='mk' type="text" name='MatKhau' placeholder="Nhập mật khẩu" ></input>
                                </div>
                                <div id='tdv' className='select-drop-down' onClick={() => show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '590px', marginTop: '74px' }}>
                                    <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('kiosk', 'ip')}><label id='kiosk'>Kiosk</label></div>
                                    <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('ht', 'ip')}><label id='ht'>Hệ thống</label></div>

                                </div>
                            </div>
                        </div>

                        <p className='text-dvsd'>Dịch vụ sử dụng</p>
                        <div className='div-dvsd' id='dvsd' onClick={showmore}  >
                            <div id='ktm1' className='dvcc'>
                                <p>Khám tim mạch </p>
                                <label onClick={() => remove('ktm1')} className='icon-delete'>×</label>
                            </div>
                            <div id='kpk1' className='dvcc'>
                                <p>Khám phụ khoa </p>
                                <label onClick={() => remove('kpk1')} className='icon-delete'>×</label>
                            </div>


                        </div>

                        <div className='row-ttbc'><p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p><p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                    </div>
                    <div className='buton-device'>
                        <span className='button-huy' onClick={() => navigate('/Device')} > Hủy bỏ</span>
                        <button className='myform-button ' type='submit'>Cập nhật</button>
                    </div>
                </form>
                <div className='title-report-type'>Quản lý thiết bị</div>
                <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='Danh sách thiết bị ﹥' nametitle3=' Cập nhật thiết bị' href='/Device' href2='' nametitle21='' />
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
        </div >
    );

}


export default UpdateDevice;


