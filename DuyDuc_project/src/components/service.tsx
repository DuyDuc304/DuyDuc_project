import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Service extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='info'><a href='/Service/AddService'>thêm dich vụ</a></div>
                    <Topbar nametitle1='Dịch vụ > ' nametitle2='' nametitle3='Danh sách dịch vụ' href='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );

    }


}

export default Service;


