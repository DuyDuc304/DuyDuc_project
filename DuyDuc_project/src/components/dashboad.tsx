import React from 'react';

import './menubar';
import { Topbar } from './topbar';
import { Menubar } from './menubar';


class Dashboad extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle='Dashboad' />
                    <Menubar />

                </div>
            </div>
        );

    }


}

export default Dashboad;


