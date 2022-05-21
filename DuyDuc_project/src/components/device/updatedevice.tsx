import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';


class UpdateDevice extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='add-device'>
                        <form >

                        </form>
                    </div>
                    <div className='buton-device'>
                        <a href="/Device" className='button-huy' > Hủy bỏ</a>
                        <button className='myform-button ' type='submit'>Thêm thiêt bị</button>
                    </div>
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <Topbar nametitle1='Thiết bị > ' nametitle2='Danh sách thiết bị >' nametitle3=' Cập nhật thiết bị' href='/Device' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default UpdateDevice;


