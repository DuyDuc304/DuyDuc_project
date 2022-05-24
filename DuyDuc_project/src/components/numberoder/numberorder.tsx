import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus } from 'react-icons/ai';
import TableNumber from './table-number';
import Nextpage from '../layout/nextpage';


class NumberOrder extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <a href='/NumberOrder/AddNumber'>
                        <div className='div-add'>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Cấp </p>
                                <p >số mới</p>
                            </div>
                        </div>
                    </a>
                    <div className='qlcs'>
                        <div className='qlcs-tdv'>
                            <p>Tên dịch vụ:</p>
                            <select className='select-tdv'>
                                <option value="all">Tất cả</option>
                                <option value="conect">Phụ sản</option>
                                <option value="unconect">Tổng quát</option>
                            </select>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Tình trạng:</p>
                            <select className='select-tdv'>
                                <option value="all">Tất cả</option>
                                <option value="conect">Phụ sản</option>
                                <option value="unconect">Tổng quát</option>
                            </select>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Nguồn cấp:</p>
                            <select className='select-tdv'>
                                <option value="all">Tất cả</option>
                                <option value="conect">Phụ sản</option>
                                <option value="unconect">Tổng quát</option>
                            </select>
                        </div>
                    </div>



                    <TableNumber />
                    <div className='title-report-type'>Quản lý cấp số</div>
                    <Nextpage />
                    <Topbar nametitle1='Cấp số ﹥ ' nametitle2='' nametitle3='Danh sách cấp số' href='' href2='' nametitle21='' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );

    }


}

export default NumberOrder;


