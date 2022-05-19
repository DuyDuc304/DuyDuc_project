import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class NumberOrder extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Cấp số > Danh sách cấp số' />
                    <Menubar />

                </div>
            </div>
        );

    }


}

export default NumberOrder;


