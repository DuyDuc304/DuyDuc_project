import React from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableService from './table-service';
import Nextpage from '../../components/nextpage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';


let newDate = new Date()


class Service extends React.Component {


    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText

    }

    show = (id: string, u: string, d: string) => {
        const ip: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (ip.style.display === 'none') {
            ip.style.display = 'block';
            up.style.display = 'flex';
            down.style.display = 'none';
        } else {
            ip.style.display = 'none';
            down.style.display = 'flex';
            up.style.display = 'none';
        }
    }
    OnClick() {
        const cld: any = document.querySelector('.daytime-picker-caledar')
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
                    <TableService />
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
                        <div className="sreach" onClick={() => this.show('tthd', 'up', 'down')}>
                            <input id='ip' className='tb-select' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button id='down'><TiArrowSortedDown /></button>
                            <button id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='tthd' className='select-drop-down' onClick={() => this.show('tthd', 'up', 'down')}>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('hd', 'ip')}><label id='hd'>Hoạt động</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('nhd', 'ip')}><label id='nhd'>Ngừng hoạt động</label></div>
                        </div>
                    </div>
                    <div className='tk'>
                        <p className='ppp'>Từ khóa</p>
                        <div className='sreach'>
                            <form autoComplete="off" >
                                <input type="text" name='timkiem' placeholder="Nhập từ khóa ..."></input>
                                <button type='submit'><AiOutlineSearch /></button>
                            </form>
                        </div>
                    </div>
                    <div className='ctg'>
                        <p className='ppp'>Chọn thời gian  </p>
                        <div className='ctg-row '>
                            <div className='daytime-picker' onClick={this.OnClick}>
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p > {newDate.toLocaleDateString()}</p>
                            </div>
                            <p style={{ color: '#535261', margin: '10px', display: 'flex' }} >▸</p>
                            <div className='daytime-picker'>
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p >{newDate.toLocaleDateString()}</p>
                            </div>

                        </div>
                    </div>


                    <div className='daytime-picker-caledar' id='cld'>
                        <Calendar locale='en' selectRange />
                    </div>
                    <Nextpage />
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='' nametitle3='Danh sách dịch vụ' href='' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>
        );

    }


}

export default Service;

