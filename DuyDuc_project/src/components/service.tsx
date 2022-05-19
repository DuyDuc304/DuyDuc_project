import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Service extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Dịch vụ > Danh sách dịch vụ' />
                    <Menubar />

                </div>
            </div>
        );

    }


}

export default Service;


