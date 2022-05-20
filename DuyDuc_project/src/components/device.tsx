import React from 'react';

import './layout/menubar';
import { Topbar } from './layout/topbar';
import { Menubar } from './layout/menubar';


class Device extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='info'><a href='/Device/AddDevice'>thêm thiêt bị</a></div>
                    <Topbar nametitle1='Thiết bị > ' nametitle2='' nametitle3='Danh sách thiết bị' href='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default Device;


