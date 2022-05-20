import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class AddDevice extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Thiết bị > ' nametitle2='Danh sách thiết bị >' nametitle3=' Thêm thiêt bị' href='/Device' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default AddDevice;


