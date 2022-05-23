import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus } from 'react-icons/ai';
import TableService from './table-service';
import Nextpage from '../layout/nextpage';


class Service extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='title-report-type'>Quản lý dịch vụ</div>
                    <a href='/Service/AddService'>
                        <div className='div-add'>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >dich vụ</p>
                            </div>
                        </div>
                    </a>
                    <TableService />
                    <Nextpage />
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='' nametitle3='Danh sách dịch vụ' href='' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );

    }


}

export default Service;


