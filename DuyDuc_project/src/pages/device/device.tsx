import React from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';
import Nextpage from '../../components/nextpage';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import TableDevice from './tabale-device';
import { useNavigate } from 'react-router-dom';
const Device = () => {
    const navigate = useNavigate();
    function Chose(id: string, input: string) {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText

    }


    function show(id: string, u: string, d: string) {
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

    return (

        <div className='bg'>
            <div className="Backgroundapp">
                <TableDevice />

                <div className='div-add' onClick={() => navigate('/Device/AddDevice')}>
                    <div className='plus'><AiOutlinePlus className='cong' /></div>
                    <div className='add'>
                        <p > Thêm </p>
                        <p >thiết bị</p>
                    </div>
                </div>


                <div className='tthd'>
                    <p className='ppp'>Trạng thái hoạt động</p>
                    <div className="sreach" onClick={() => show('tthd', 'up', 'down')} >
                        <input id='ip' className='tb-select' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                        <button id='down'><TiArrowSortedDown /></button>
                        <button id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                    </div>
                    <div id='tthd' className='select-drop-down' onClick={() => show('tthd', 'up', 'down')}>
                        <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('hd', 'ip')}><label id='hd'>Hoạt động</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('nhd', 'ip')}><label id='nhd'>Ngừng hoạt động</label></div>
                    </div>

                </div>
                <div className='ttkn'>
                    <p className='ppp'>Trạng thái kết nối</p>
                    <div className="sreach" onClick={() => show('ttkn', 'up1', 'down1')}>
                        <input id='ip1' className='tb-select' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                        <button id='down1'><TiArrowSortedDown /></button>
                        <button id='up1' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                    </div>
                    <div id='ttkn' className='select-drop-down' onClick={() => show('ttkn', 'up1', 'down1')}>
                        <div className='select-drop-down-item ' onClick={() => Chose('tc1', 'ip1')}><label id='tc1'>Tất cả</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('kn', 'ip1')}><label id='kn'>Kết nối</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('mkn', 'ip1')}><label id='mkn'>Mất kết nối</label></div>
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
                <div className='title-report-type'>Danh sách thiết bị</div>

                <Nextpage />
                <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='' nametitle3='Danh sách thiết bị' href='' href2='' nametitle21='' />
                <Menubar buttonid="tb" />

            </div>
        </div>
    );

}




export default Device;


