import React from 'react';
import { Topbar } from '../../../components/topbar';
import { Menubar } from '../../../components/menu/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableAccountUser from './table-accountser';
import Nextpage from '../../../components/nextpage';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';


const AccountUser = () => {
    const nav = useNavigate()
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
                <TableAccountUser />

                <div className='div-add' onClick={() => nav('/AccountUser/AddAccountUser')} >
                    <div className='plus'><AiOutlinePlus className='cong' /></div>
                    <div className='add'>
                        <p > Thêm </p>
                        <p >tài khoản</p>
                    </div>
                </div>

                <div className='tthd'>
                    <p className='ppp'> Tên vai trò</p>
                    <div className="sreach" onClick={() => show('tthd', 'up', 'down')}>
                        <input readOnly id='ip' className='tb-select' value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                        <button id='down'><TiArrowSortedDown /></button>
                        <button id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                    </div>
                    <div id='tthd' className='select-drop-down' onClick={() => show('tthd', 'up', 'down')}>
                        <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('kt', 'ip')}><label id='kt'>Kế toán</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('bs', 'ip')}><label id='bs'>Bác sĩ</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('ad', 'ip')}><label id='ad'>Admin</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('sa', 'ip')}><label id='sa'>Super Admin</label></div>
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

                <div className='title-report-type'>Danh sách tài khoản</div>
                <Nextpage />
                <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' nametitle3='Quản lý tài khoản' href='' href2='' nametitle21='' />
                <Menubar buttonid="qltk" />
            </div>
        </div >
    );

}




export default AccountUser;


