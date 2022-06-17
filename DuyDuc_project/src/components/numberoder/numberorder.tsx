import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableNumber from './table-number';
import Nextpage from '../layout/nextpage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

let newDate = new Date()


class NumberOrder extends React.Component {
    onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };

        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbno")
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

    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        const tdv: any = document.getElementById('ip')
        ip.value = text.innerText
        const a: string = 'Khám ' + tdv.value.toLowerCase()
        this.Loctdv(a)
        if (text.innerText === 'Đang chờ') {
            this.DangCho()
        }
        if (text.innerText === 'Đã sử dụng') {
            this.DaSuDung()
        }
        if (text.innerText === 'Tất cả') {
            this.TatCa()
        }
        if (text.innerText === 'Bỏ qua') {
            this.BoQua()
        }
        if (text.innerText === 'Kiosk') {
            this.kiosk()
        }
        if (text.innerText === 'Hệ thống') {
            this.HeThong()
        }
    }
    TatCa() {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {

            allrow[i].style.display = 'flex'
        }
    }
    DaSuDung() {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col-num6") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Đã sử dụng') {
                                allrow[i].style.display = 'flex'
                            }

                        }
                    }

                }

            }
        }
    }
    DangCho() {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col-num6") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Đang chờ') {
                                allrow[i].style.display = 'flex'
                            }

                        }
                    }

                }

            }
        }
    }
    BoQua() {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col-num6") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Bỏ qua') {
                                allrow[i].style.display = 'flex'
                            }

                        }
                    }

                }

            }
        }
    }

    kiosk() {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col-num7") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === 'Kiosk') {
                            allrow[i].style.display = 'flex'
                        }


                    }

                }

            }
        }
    }
    HeThong() {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col-num7") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === 'Hệ thống') {
                            allrow[i].style.display = 'flex'
                        }


                    }

                }

            }
        }
    }
    Loctdv(inner: string) {
        const allelm: any = document.getElementById("tbno")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col-num3") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === inner) {
                            allrow[i].style.display = 'flex'
                        }
                    }

                }

            }
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
        const cld: any = document.querySelector('.daytime-picker-caledar-qlcs')
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
                    <TableNumber />
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
                            <p>Tên dịch vụ</p>
                            <div className="box" onClick={() => this.show('tdv', 'up', 'down')} >
                                <input readOnly id='ip' value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                                <button className='box-button' id='down'><TiArrowSortedDown /></button>
                                <button className='box-button' id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                            </div>
                            <div id='tdv' className='select-drop-down' style={{ width: '154px' }} onClick={() => this.show('tdv', 'up', 'down')}>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('ps', 'ip')}><label id='ps'>Phụ khoa</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('tq', 'ip')}><label id='tq'>Tổng quát</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('rhm', 'ip')}><label id='rhm'>Răng hàm mặt</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('tm', 'ip')}><label id='tm'>Tim mạch</label></div>
                            </div>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Tình trạng</p>
                            <div className="box" onClick={() => this.show('tt', 'up1', 'down1')}>
                                <input id='iptt' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                                <button className='box-button' id='down1'><TiArrowSortedDown /></button>
                                <button className='box-button' id='up1' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                            </div>
                            <div id='tt' className='select-drop-down' style={{ width: '154px', marginLeft: '175px' }} onClick={() => this.show('tt', 'up1', 'down1')}>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('tc', 'iptt')}><label id='tc'>Tất cả</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('dc', 'iptt')}><label id='dc'>Đang chờ</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('dsd', 'iptt')}><label id='dsd'>Đã sử dụng</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('bq', 'iptt')}><label id='bq'>Bỏ qua</label></div>
                            </div>

                        </div>
                        <div className='qlcs-tdv'>
                            <p>Nguồn cấp</p>
                            <div className="box" onClick={() => this.show('nc', 'up2', 'down2')}>
                                <input id='ipnc' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                                <button className='box-button' id='down2'><TiArrowSortedDown /></button>
                                <button className='box-button' id='up2' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                            </div>
                            <div id='nc' className='select-drop-down' style={{ width: '154px', marginLeft: '345px' }} onClick={() => this.show('nc', 'up2', 'down2')}>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('tc', 'ipnc')}><label id='tc'>Tất cả</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('kiosk', 'ipnc')}><label id='kiosk'>Kiosk</label></div>
                                <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => this.Chose('ht', 'ipnc')}><label id='ht'>Hệ thống</label></div>

                            </div>
                        </div>
                        <div className='qlcs-tdv'>
                            <p>Chọn thời gian</p>
                            <div className='ctg-row '>
                                <div className='daytime-picker-qlcs' onClick={this.OnClick} >
                                    <FaRegCalendarAlt className='icon-calendar' />
                                    <p>{newDate.toLocaleDateString()}</p>
                                </div>
                                <p style={{ color: '#535261', margin: '10px', display: 'flex' }} >▸</p>
                                <div className='daytime-picker-qlcs' >
                                    <FaRegCalendarAlt className='icon-calendar' />
                                    <p>{newDate.toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                        <div className='qlcs-tdv'>
                            <p >Từ khóa</p>
                            <div className='sreach-qlcs' >
                                <form autoComplete="off" onSubmit={this.onSumbit} >
                                    <input type="text" name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
                                    <button className="sreach-sv-button" type='submit'><AiOutlineSearch /></button>
                                </form>

                            </div>
                        </div>

                    </div>

                    <div className='daytime-picker-caledar-qlcs' id='cldsv'>
                        <Calendar locale='en' selectRange />
                    </div>


                    <div className='title-report-type'>Quản lý cấp số</div>
                    <Nextpage />
                    <Topbar nametitle1='Cấp số ﹥' nametitle2='' nametitle3='Danh sách cấp số' href='' href2='' nametitle21='' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );

    }


}

export default NumberOrder;


