import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';
import { AiOutlinePlus } from 'react-icons/ai';


class AccountUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <a href='/AccountUser/AddAccountUser'>
                        <div className='div-add' style={{ top: '192px' }}>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >tài khoản</p>
                            </div>
                        </div>
                    </a>
                    <div className='title-report-type'>Danh sách tài khoản</div>
                    <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' nametitle3='Quản lý tài khoản' href='' href2='' nametitle21='' />
                    <Menubar buttonid="qltk" />
                </div>
            </div>
        );

    }


}

export default AccountUser;


