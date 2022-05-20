import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Service extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Dịch vụ > ' nametitle2='' nametitle3='Danh sách dịch vụ' href='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );

    }


}

export default Service;


