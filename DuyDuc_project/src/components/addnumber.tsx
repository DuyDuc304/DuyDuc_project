import React from 'react';
import { Menubar } from './menubar';
import { Topbar } from './topbar';


class AddNumber extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cấp số > ' nametitle2='Danh sách cấp số > ' nametitle3='Thêm số mới' href='/NumberOder' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );
    }
}
export default AddNumber;
