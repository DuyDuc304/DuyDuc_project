import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableNumber from './table-number';
import Nextpage from '../layout/nextpage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';

let newDate = new Date()
let day = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let setday = day + "/" + month + "/" + year;

class NumberOrder extends React.Component {
    OnClick() {
        const cld: any = document.querySelector('.daytime-picker-caledar-qlcs')
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
                    <a href='/NumberOrder/AddNumber'>
                        <div className='div-add'>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Cấp </p>
                                <p >số mới</p>
                            </div>
                        </div>
                    </a>
                    <div className='qlcs'>
                        <div className='qlcs-tdv'>
                            <p>Tên dịch vụ:</p>
                            <select className='select-tdv'>
                                <option value="all">Tất cả</option>
                                <option value="conect">Phụ sản</option>
                                <option value="unconect">Tổng quát</option>
                            </select>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Tình trạng:</p>
                            <select className='select-tdv'>
                                <option value="all">Tất cả</option>
                                <option value="conect">Phụ sản</option>
                                <option value="unconect">Tổng quát</option>
                            </select>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Nguồn cấp:</p>
                            <select className='select-tdv'>
                                <option value="all">Tất cả</option>
                                <option value="conect">Phụ sản</option>
                                <option value="unconect">Tổng quát</option>
                            </select>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Chọn thời gian</p>
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
                        <div className='qlcs-tdv'>
                            <p >Từ khóa</p>
                            <div className='sreach-qlcs' >
                                <form  >
                                    <input type="text" name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
                                    <button className="sreach-sv-button" type='submit'><AiOutlineSearch /></button>
                                </form>

                            </div>
                        </div>

                    </div>
                    <TableNumber />
                    <div className='daytime-picker-caledar-qlcs' id='cldsv'>
                        <Calendar locale='en' selectRange />
                    </div>


                    <div className='title-report-type'>Quản lý cấp số</div>
                    <Nextpage />
                    <Topbar nametitle1='Cấp số ﹥ ' nametitle2='' nametitle3='Danh sách cấp số' href='' href2='' nametitle21='' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );

    }


}

export default NumberOrder;


