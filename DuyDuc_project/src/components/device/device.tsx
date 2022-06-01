import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import TableDevice from './tabale-device';
import Nextpage from '../layout/nextpage';

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

class Device extends React.Component {
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
                            <input id='ip' className='tb-select' disabled value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
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
                            <input id='ip1' className='tb-select' disabled value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
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
                            <form autoComplete="off">
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


