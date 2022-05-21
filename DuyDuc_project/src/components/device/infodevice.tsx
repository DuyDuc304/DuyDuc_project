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
                    <a href='/Device/UpdateDevice'>
                        <div className='div-add'>
                            <div className='plus'><FaPen className='cong' /></div>
                            <div className='add'>
                                <p > Cập nhật</p>
                                <p >thiết bị</p>
                            </div>
                        </div>
                    </a>
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <Topbar nametitle1='Thiết bị > ' nametitle2='Danh sách thiết bị >' nametitle3='Chi tiết thiết bị' href='/Device' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default InfoDevice;


