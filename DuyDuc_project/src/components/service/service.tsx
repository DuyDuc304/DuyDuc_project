import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableService from './table-service';
import Nextpage from '../layout/nextpage';
import { FaRegCalendarAlt } from 'react-icons/fa';

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let setday = date + "/" + month + "/" + year;
class Service extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='title-report-type'>Quản lý dịch vụ</div>
                    <a href='/Service/AddService'>
                        <div className='div-add'>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >dich vụ</p>
                            </div>
                        </div>
                    </a>
                    <div className='tthd'>
                        <p className='ppp'>Trạng thái hoạt động</p>
                        <select className='tb-select' >
                            <option value="all">Tất cả</option>
                            <option value="act">Hoạt động</option>
                            <option value="notatc">Ngừng hoạt động</option>
                        </select>
                    </div>
                    <div className='tk'>
                        <p className='ppp'>Từ khóa</p>
                        <div className='sreach'>
                            <form >
                                <input type="text" name='timkiem' placeholder="Nhập từ khóa ..."></input>
                                <button type='submit'><AiOutlineSearch /></button>
                            </form>
                        </div>
                    </div>
                    <div className='ctg'>
                        <p className='ppp'>Chọn thời gian  </p>
                        <div className='ctg-row '>
                            <div className='daytime-picker'>
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p>{setday}</p>
                            </div>
                            <p style={{ color: '#535261', margin: '10px', display: 'flex' }} >▸</p>
                            <div className='daytime-picker'>
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p>{setday}</p>
                            </div>

                        </div>
                    </div>
                    <TableService />
                    <Nextpage />
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='' nametitle3='Danh sách dịch vụ' href='' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );

    }


}

export default Service;


