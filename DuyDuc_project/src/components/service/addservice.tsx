import React from 'react';
import Calendar from 'react-calendar';
import { Menubar } from '../layout/menubar';
import { Topbar } from '../layout/topbar';


class AddService extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='Danh sách dịch vụ ﹥' nametitle3=' Thêm dịch vụ' href='/Service' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />
                    <div className='info'>

                    </div>
                </div>
            </div>
        );
    }
}
export default AddService;
