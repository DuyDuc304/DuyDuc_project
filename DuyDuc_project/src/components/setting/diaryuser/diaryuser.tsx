import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';


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


