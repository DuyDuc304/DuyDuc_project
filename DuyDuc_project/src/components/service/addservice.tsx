import React from 'react';

import { Menubar } from '../layout/menubar';
import { Topbar } from '../layout/topbar';


class AddService extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='title-report-type'>Quản lý dịch vụ</div>
                    <form >
                        <div className='add-device'>
                            <p className='text-tttb'>Thông tin thiết bị</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mã dịch vụ :</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='MaDichVu' placeholder="Nhập mã dịch vụ"></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên dịch vụ:</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenDichVu' placeholder="Nhập tên dịch vụ"></input>
                                    </div>

                                </div>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <p className='text-mota' style={{ marginBottom: '8px' }}>Mô tả:</p>
                                        <textarea name='Mota' placeholder="Mô tả dịch vụ" className='input-mota'></textarea>

                                    </div>
                                </div>
                            </div>

                            <p className='text-tttb'>Loại thiết bị:</p>
                            <div className='row-checkbox'>
                                <label className="container">Tăng tự động từ:
                                    <input name='TangTuDong' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                                <input className='row-checkbox-input' type="text" value={'0001'}></input>
                                <label >đến</label>
                                <input className='row-checkbox-input' type="text" value={'9999'}></input>
                            </div>
                            <div className='row-checkbox'>
                                <label className="container">Prefix:
                                    <input name='Prefix' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                                <input className='row-checkbox-input' type="text" value={'0001'} style={{ marginLeft: '82px' }}></input>

                            </div>
                            <div className='row-checkbox'>
                                <label className="container">Surfix:
                                    <input name='Surfix' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                                <input className='row-checkbox-input' type="text" value={'0001'} style={{ marginLeft: '82px' }}></input>

                            </div>
                            <div className='row-checkbox'>
                                <label className="container">reset mỗi ngày
                                    <input name='reset' type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>

                            </div>
                            <div className='row-ttbc'><p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                <p className='text-ttbc'>Là trường thông tin bắt buộc</p></div>
                        </div>
                        <div className='buton-device'>
                            <a href="/Service" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Thêm thiêt bị</button>
                        </div>
                    </form>
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='Danh sách dịch vụ ﹥' nametitle3=' Thêm dịch vụ' href='/Service' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );
    }
}
export default AddService;
