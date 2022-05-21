import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';


class AccountUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống >' nametitle2='' nametitle3='Quản lý tài khoản' href='' href2='' nametitle21='' />
                    <Menubar buttonid="qltk" />
                </div>
            </div>
        );

    }


}

export default AccountUser;


