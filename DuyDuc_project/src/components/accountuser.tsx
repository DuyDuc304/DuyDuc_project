import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class AccountUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Cài đặt hệ thống > Quản lý tài khoản' />
                    <Menubar buttonid="qltk" />

                </div>
            </div>
        );

    }


}

export default AccountUser;


