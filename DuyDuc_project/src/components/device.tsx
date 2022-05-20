import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Device extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Thiết bị > Danh sách thiết bị' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default Device;


