import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import Chart from './chart';




class Dashboard extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Chart defaulchart='ngày' />
                    <Topbar nametitle1='' nametitle2='' nametitle3='Dashboard' href='' />
                    <Menubar buttonid="db" />

                </div>
            </div>
        );

    }


}

export default Dashboard;


