import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus } from "react-icons/ai";

class Device extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <a href='/Device/AddDevice'>
                        <div className='div-add'>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >thiết bị</p>
                            </div>
                        </div>
                    </a>
                    <div className='div-layout'></div>
                    <Topbar nametitle1='Thiết bị > ' nametitle2='' nametitle3='Danh sách thiết bị' href='' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default Device;


