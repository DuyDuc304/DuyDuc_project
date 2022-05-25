import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { FaPen } from 'react-icons/fa';


class InfoDevice extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='div-infodevice'>
                        <div className='div-infortext'>
                            <p className='text-tttb'>Thông tin thiết bị</p>
                            <div className='div-rowdevice'>
                                <div className='div-coldevice '>
                                    <table className='table-info'>
                                        <tbody>
                                            <tr>
                                                <th>Mã thiết bị:</th>
                                                <td>KIO_01</td>
                                            </tr>
                                            <tr>
                                                <th>Tên thiết bị:</th>
                                                <td>Kiosk</td>
                                            </tr>
                                            <tr>
                                                <th>Địa chỉ IP:</th>
                                                <td>128.172.308</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='div-coldevice '>
                                    <table className='table-info'>
                                        <tbody>
                                            <tr>
                                                <th>Loại thiết bị:</th>
                                                <td>Kiosk</td>
                                            </tr>
                                            <tr>
                                                <th>Tên đăng nhập:</th>
                                                <td>linhkyo011</td>
                                            </tr>
                                            <tr>
                                                <th>Mật khẩu:</th>
                                                <td>CMS</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <p className='text-dvsd'>Dịch vụ sử dụng</p>
                            <p className='text-info-dvsd'> Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt,
                                Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</p>
                        </div>
                    </div>
                    <a href='/Device/UpdateDevice'>
                        <div className='div-add' style={{ top: '156px' }}>
                            <div className='plus'><FaPen className='cong' /></div>
                            <div className='add'>
                                <p > Cập nhật</p>
                                <p >thiết bị</p>
                            </div>
                        </div>
                    </a>
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='Danh sách thiết bị ﹥' nametitle3='Chi tiết thiết bị' href='/Device' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default InfoDevice;


