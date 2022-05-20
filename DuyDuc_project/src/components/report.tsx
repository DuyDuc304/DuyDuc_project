import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Report extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Báo cáo' />
                    <Menubar buttonid="bc" />

                </div>
            </div>
        );

    }


}

export default Report;


