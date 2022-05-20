import React from 'react';
import { Menubar } from '../layout/menubar';
import { Topbar } from '../layout/topbar';


class AddNumber extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cấp số > ' nametitle2='Danh sách cấp số > ' nametitle3='Thêm số mới' href='/NumberOrder' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );
    }
}
export default AddNumber;
