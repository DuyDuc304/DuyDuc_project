import React from 'react';

import './layout/menubar';
import { Topbar } from './layout/topbar';
import { Menubar } from './layout/menubar';


class Report extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Báo cáo >' nametitle2='' nametitle3='Lập báo cáo' href='' />
                    <Menubar buttonid="bc" />

                </div>
            </div>
        );

    }


}

export default Report;


