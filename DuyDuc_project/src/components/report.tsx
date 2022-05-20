import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Report extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='' nametitle2='' nametitle3='Báo cáo' href='' />
                    <Menubar buttonid="bc" />

                </div>
            </div>
        );

    }


}

export default Report;


