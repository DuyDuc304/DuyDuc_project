import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableService from './table-service';
import Nextpage from '../layout/nextpage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';


let newDate = new Date()


class Service extends React.Component {
    onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };

        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbdv")
        const allrow: any = allelm.children
        if (timkiem !== '') {

            for (let i = 1; i < allrow.length; i++) {
                const allelmr: any = allrow[i].children
                allrow[i].style.display = 'none'
                for (let j = 0; j < allelmr.length; j++) {

                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText.toLowerCase().trim() === timkiem.toLowerCase()) {
                            allrow[i].style.display = 'flex'
                        }
                    }

                }
            }
        } else {
            for (let i = 1; i < allrow.length; i++) {

                allrow[i].style.display = 'flex'
            }
        }
    }

    LocTTHD(tt: string) {
        const allelm: any = document.getElementById("tbdv")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "colum4-service") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === tt) {
                                allrow[i].style.display = 'flex'
                            }
                        }
                    }
                }
            }
        }
    }
    Tatca() {
        const allelm: any = document.getElementById("tbdv")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {

            allrow[i].style.display = 'flex'
        }
    }
    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
        this.LocTTHD(ip.value)
        if (text.innerText === 'Tất cả') {
            this.Tatca()
        }
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
                            <form autoComplete="off" onSubmit={this.onSumbit}>
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


