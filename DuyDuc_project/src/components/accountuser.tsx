import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class AccountUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống >' nametitle2='Quản lý tài khoản' nametitle3='> Cài đặt hệ thống ' href='#' />
                    <Menubar buttonid="qltk" />
                </div>
            </div>
        );

    }


}

export default AccountUser;


