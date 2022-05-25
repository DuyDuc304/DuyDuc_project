import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { FaPen } from 'react-icons/fa';
import { RiArrowGoBackLine } from 'react-icons/ri';


class InfoNumberOrder extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='div-infodevice'>
                        <div className='div-infortext'>
                            <p className='text-tttb'>Thông tin cấp số</p>
                            <div className='div-rowdevice'>
                                <div className='div-col-infonum '>
                                    <table className='table-info-num' >
                                        <tbody>
                                            <tr>
                                                <th>Họ và tên:</th>
                                                <td>Nguyễn Duy Đức</td>
                                            </tr>
                                            <tr>
                                                <th>Tên dịch vụ:</th>
                                                <td>Khám tim mạch</td>
                                            </tr>
                                            <tr>
                                                <th>Số thứ tự:</th>
                                                <td>2001201</td>
                                            </tr>
                                            <tr>
                                                <th>Thời gian cấp:</th>
                                                <td>14:05-09/05/2022</td>
                                            </tr>
                                            <tr>
                                                <th>Hạn sử dụng:</th>
                                                <td>18:00-09/10/2022</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='div-col-infonum '>
                                    <table className='table-info-num' >
                                        <tbody>
                                            <tr>
                                                <th>Nguồn cấp:</th>
                                                <td>Kiosk</td>
                                            </tr>
                                            <tr>
                                                <th>Trạng thái:</th>
                                                <td>Đang hoạt động</td>
                                            </tr>
                                            <tr>
                                                <th>Số điện thoại:</th>
                                                <td>0379439567</td>
                                            </tr>
                                            <tr>
                                                <th>Địa chỉ Email:</th>
                                                <td>ducpy30042000@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <a href='/NumberOrder'>
                        <div className='div-add' style={{ top: '154px', height: '75px' }}>
                            <div className='plus'><RiArrowGoBackLine className='cong' /></div>
                            <div className='add'>
                                <p > Quay lại</p>

                            </div>
                        </div>
                    </a>
                    <div className='title-report-type'>Quản lý cấp sô</div>
                    <Topbar nametitle1='Cấp số﹥ ' nametitle2='Danh sách cấp số ﹥' nametitle3='Chi tiết cấp số' href='/NumberOrder' href2='' nametitle21='' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );

    }


}

export default InfoNumberOrder;


