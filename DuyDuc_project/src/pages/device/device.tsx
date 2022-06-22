import React from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';
import Nextpage from '../../components/nextpage';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import TableDevice from './tabale-device';
class Device extends React.Component {
    HoatDong() {
        const allelm: any = document.getElementById("tbtb")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "colum4") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Hoạt động') {
                                allrow[i].style.display = 'flex'
                            }

                        }
                    }

                }

            }
        }
    }
    NgungHoatDong() {
        const allelm: any = document.getElementById("tbtb")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "colum4") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Ngừng hoạt động') {
                                allrow[i].style.display = 'flex'
                            }
                        }
                    }

                }

            }
        }
    }
    KetNoi() {
        const allelm: any = document.getElementById("tbtb")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "colum5") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Kết nối') {
                                allrow[i].style.display = 'flex'

                            }

                        }
                    }

                }

            }
        }
    }
    MatKetNoi() {
        const allelm: any = document.getElementById("tbtb")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "colum5") {
                    const div: any = allelmr[j].children
                    for (let k = 0; k < div.length; k++) {
                        const p: any = div[k].children
                        for (let h = 0; h < p.length; h++) {
                            if (p[h].innerText === 'Mất kết nối') {
                                allrow[i].style.display = 'flex'

                            }

                        }
                    }

                }

            }
        }
    }
    Tatca() {
        const allelm: any = document.getElementById("tbtb")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {

            allrow[i].style.display = 'flex'
        }
    }
    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
        if (text.innerText === 'Hoạt động') {
            this.HoatDong()
        }
        if (text.innerText === 'Ngừng hoạt động') {
            this.NgungHoatDong()
        }
        if (text.innerText === 'Tất cả') {
            this.Tatca()
        }
        if (text.innerText === 'Kết nối') {
            this.KetNoi()
        }
        if (text.innerText === 'Mất kết nối') {
            this.MatKetNoi()
        }
    }
    onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };

        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbtb")
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
    render() {
        return (

            <div className='bg'>
                <div className="Backgroundapp">
                    <TableDevice />
                    <a href='/Device/AddDevice'>
                        <div className='div-add'>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >thiết bị</p>
                            </div>
                        </div>
                    </a>

                    <div className='tthd'>
                        <p className='ppp'>Trạng thái hoạt động</p>
                        <div className="sreach" onClick={() => this.show('tthd', 'up', 'down')} >
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
                    <div className='ttkn'>
                        <p className='ppp'>Trạng thái kết nối</p>
                        <div className="sreach" onClick={() => this.show('ttkn', 'up1', 'down1')}>
                            <input id='ip1' className='tb-select' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button id='down1'><TiArrowSortedDown /></button>
                            <button id='up1' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='ttkn' className='select-drop-down' onClick={() => this.show('ttkn', 'up1', 'down1')}>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('tc1', 'ip1')}><label id='tc1'>Tất cả</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('kn', 'ip1')}><label id='kn'>Kết nối</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('mkn', 'ip1')}><label id='mkn'>Mất kết nối</label></div>
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
                    <div className='title-report-type'>Danh sách thiết bị</div>

                    <Nextpage />
                    <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='' nametitle3='Danh sách thiết bị' href='' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default Device;


