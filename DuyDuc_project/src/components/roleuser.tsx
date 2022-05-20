import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class RoleUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Cài đặt hệ thống > Quản lý vai trò' />
                    <Menubar buttonid="qlvt" />

                </div>
            </div>
        );

    }


}

export default RoleUser;


