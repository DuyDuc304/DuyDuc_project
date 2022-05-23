import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import TableReport from './table-report';


class Report extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <a href='#'>
                        <div className='div-add-download'>
                            <FaFileDownload className='download' />
                            <div className='add'>
                                <p >Tải về</p>
                            </div>
                        </div>
                    </a>
                    <TableReport />
                    <Topbar nametitle1='Báo cáo ﹥' nametitle2='' nametitle3='Lập báo cáo' href='' href2='' nametitle21='' />
                    <Menubar buttonid="bc" />

                </div>
            </div>
        );

    }


}

export default Report;


