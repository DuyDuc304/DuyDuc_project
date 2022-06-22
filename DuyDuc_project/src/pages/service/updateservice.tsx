import React from 'react';

import { Menubar } from '../../components/menu/menubar';
import { Topbar } from '../../components/topbar';


class UpdateService extends React.Component {
    setvalue() {
        const mdv: any = document.getElementById('mdv')
        mdv.value = '201'
        const tdv: any = document.getElementById('tdv')
        tdv.value = 'Khám tim mạch'
        const mt: any = document.getElementById('mt')
        mt.value = ''
        const checkttd: any = document.getElementById('checkttd')
        checkttd.checked = true
        const ttdt: any = document.getElementById('ttdt')
        ttdt.value = '0001'
        const ttdd: any = document.getElementById('ttdd')
        ttdd.value = '9999'
        const checkprf: any = document.getElementById('checkprf')
        checkprf.checked = false
        const prf: any = document.getElementById('prf')
        prf.value = '0000'
        const checksf: any = document.getElementById('checksf')
        checksf.checked = false
        const sf: any = document.getElementById('sf')
        sf.value = '0000'
        const checkrs: any = document.getElementById('checkrs')
        checkrs.checked = false
    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp" onLoad={() => this.setvalue()}>
                    <div className='title-report-type'>Quản lý dịch vụ</div>
                    <form autoComplete="off">
                        <div className='add-device'>
                            <p className='text-tttb'>Thông tin thiết bị</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mã dịch vụ :</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id='mdv' type="text" name='MaDichVu' placeholder="Nhập mã dịch vụ" ></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên dịch vụ:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id='tdv' type="text" name='TenDichVu' placeholder="Nhập tên dịch vụ" ></input>
                                    </div>

                                </div>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>

                                        <p className='text-mota' style={{ marginBottom: '8px' }}>Mô tả:</p>


                                        <textarea id='mt' name='MatKhau' placeholder="Mô tả dịch vụ" className='input-mota'></textarea>

                                    </div>
                                </div>
                            </div>

                            <p className='text-tttb'>Loại thiết bị:</p>
                            <div className='row-checkbox'>
                                <label className="container">Tăng tự động từ :
                                    <input id='checkttd' name='TangTuDong' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                                <input id='ttdt' className='row-checkbox-input' type="number" ></input>
                                <label >đến</label>
                                <input id='ttdd' className='row-checkbox-input' type="number" ></input>
                            </div>
                            <div className='row-checkbox'>
                                <label className="container">Prefix:
                                    <input id='checkprf' name='Prefix' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                                <input id='prf' className='row-checkbox-input' type="number" style={{ marginLeft: '82px' }}></input>

                            </div>
                            <div className='row-checkbox'>
                                <label className="container">Surfix:
                                    <input id='checksf' name='Surfix' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                                <input id='sf' className='row-checkbox-input' type="number" style={{ marginLeft: '82px' }}></input>

                            </div>
                            <div className='row-checkbox'>
                                <label className="container">Reset mỗi ngày
                                    <input id='checkrs' name='reset' type="checkbox" ></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='row-ttbc'><p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p>
                                <p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                        </div>
                        <div className='buton-device'>
                            <a href="/Service" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Cập nhật</button>
                        </div>
                    </form>
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='Danh sách dịch vụ ﹥' nametitle3=' Cập nhật' href='/Service' href2='/Service/InfoService' nametitle21='Chi tiết ﹥' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );
    }
}
export default UpdateService;
