import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';
import Nextpage from '../../layout/nextpage';
import Calendar from 'react-calendar';
import { FaRegCalendarAlt } from 'react-icons/fa';
import TableDiary from './tablediary';
import { AiOutlineSearch } from 'react-icons/ai';

let newDate = new Date()
let day = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let setday = day + "/" + month + "/" + year;

class DiaryUser extends React.Component {
    OnClick() {
        const cld: any = document.getElementById('cldsv')
        if (cld.style.display === "none") {
            cld.style.display = "block";
        } else {
            cld.style.display = 'none';
        }


    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='ctg-report '>
                        <p className='ctg-report-p'>Chọn thời gian</p>
                        <div className='ctg-row ' style={{ marginTop: '-5px' }}>
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
                    <div className="tk-diary">
                        <p>Từ khóa</p>
                        <div className='sreach-qlcs' style={{ marginTop: '-5px' }} >
                            <form  >
                                <input type="text" name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
                                <button className="sreach-sv-button" type='submit'><AiOutlineSearch /></button>
                            </form>
                        </div>
                    </div>
                    <TableDiary />
                    <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' nametitle3=' Nhật ký người dùng' href='' href2='' nametitle21='' />
                    <Nextpage />
                    <div className='daytime-picker-caledar-report' id='cldsv'>
                        <Calendar locale='en' selectRange />
                    </div>
                    <Menubar buttonid="nknd" />

                </div>
            </div>
        );

    }


}

export default DiaryUser;


