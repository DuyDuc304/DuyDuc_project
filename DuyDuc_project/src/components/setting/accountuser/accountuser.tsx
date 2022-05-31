import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableAccountUser from './table-accountser';
import Nextpage from '../../layout/nextpage';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';


class AccountUser extends React.Component {
    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    show = (id: string, u: string, d: string) => {
        const ip: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (ip.style.display == 'none') {
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
                    <TableAccountUser />
                    <a href='/AccountUser/AddAccountUser'>
                        <div className='div-add' >
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >tài khoản</p>
                            </div>
                        </div>
                    </a>
                    <div className='tthd'>
                        <p className='ppp'> Tên vai trò</p>
                        <div className="sreach">
                            <input onClick={() => this.show('tthd', 'up', 'down')} id='ip' className='tb-select' value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button onClick={() => this.show('tthd', 'up', 'down')} id='down'><TiArrowSortedDown /></button>
                            <button onClick={() => this.show('tthd', 'up', 'down')} id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='tthd' className='select-drop-down' onClick={() => this.show('tthd', 'up', 'down')}>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('tc', 'ip')}><a id='tc'>Tất cả</a></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('kt', 'ip')}><a id='kt'>Kế toán</a></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('bs', 'ip')}><a id='bs'>Bác sĩ</a></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('ad', 'ip')}><a id='ad'>Admin</a></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('sa', 'ip')}><a id='sa'>Super Admin</a></div>
                        </div>
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

                    <div className='title-report-type'>Danh sách tài khoản</div>
                    <Nextpage />
                    <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' nametitle3='Quản lý tài khoản' href='' href2='' nametitle21='' />
                    <Menubar buttonid="qltk" />
                </div>
            </div >
        );

    }


}

export default AccountUser;


