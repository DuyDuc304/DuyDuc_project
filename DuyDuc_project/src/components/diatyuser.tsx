import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class DiaryUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Cài đặt hệ thống > Nhật ký người dùng' />
                    <Menubar />

                </div>
            </div>
        );

    }


}

export default DiaryUser;


