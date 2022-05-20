import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class NumberOrder extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cấp số > ' nametitle2='' nametitle3='Danh sách cấp số' href='' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );

    }


}

export default NumberOrder;


