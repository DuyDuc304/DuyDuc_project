import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class DiaryUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống >' nametitle2='' nametitle3=' Nhật ký người dùng' href='' />
                    <Menubar buttonid="nknd" />

                </div>
            </div>
        );

    }


}

export default DiaryUser;


