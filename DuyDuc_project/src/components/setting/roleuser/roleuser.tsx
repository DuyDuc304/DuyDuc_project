import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';


class RoleUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống > ' nametitle2='' nametitle3='Quản lý vai trò' href='' />
                    <Menubar buttonid="qlvt" />

                </div>
            </div>
        );

    }


}

export default RoleUser;


