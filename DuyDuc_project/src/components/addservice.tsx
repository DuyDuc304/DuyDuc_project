import React from 'react';
import { Menubar } from './menubar';
import { Topbar } from './topbar';


class AddService extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Thiết bị > ' nametitle2='Danh sách dịch vụ >' nametitle3=' Thêm dịch vụ' href='/Service' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );
    }
}
export default AddService;
