import React from 'react';
import { FaFileDownload, FaRegCalendarAlt } from 'react-icons/fa';
import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import TableReport from './table-report';
import Nextpage from '../layout/nextpage';
import Calendar from 'react-calendar';



let newDate = new Date()
let day = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let setday = day + "/" + month + "/" + year;


class Report extends React.Component {
    OnClick() {
        const cld: any = document.getElementById('cldsv')
        if (cld.style.display == "none") {
            cld.style.display = "block";
        } else {
            cld.style.display = 'none';
        }


    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <a href='#'>
                        <div className='div-add-download' >
                            <FaFileDownload className='download' />
                            <div className='add'>
                                <p >Tải về</p>
                            </div>
                        </div>
                    </a>
                    <div className='ctg-report '>
                        <p className='ctg-report-p'>Chọn thời gian</p>
                        <div className='ctg-row '>
                            <div className='daytime-picker-qlcs' onClick={this.OnClick} >
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p>{setday}</p>
                            </div>
                            <p style={{ color: '#535261', margin: '10px', display: 'flex' }} >▸</p>
                            <div className='daytime-picker-qlcs' >
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p>{setday}</p>
                            </div>
                        </div>
                    </div>
                    <TableReport />
                    <Nextpage />
                    <div className='daytime-picker-caledar-report' id='cldsv'>
                        <Calendar locale='en' selectRange />
                    </div>

                    <Topbar nametitle1='Báo cáo ﹥' nametitle2='' nametitle3='Lập báo cáo' href='' href2='' nametitle21='' />
                    <Menubar buttonid="bc" />

                </div>
            </div>
        );

    }


}

export default Report;


