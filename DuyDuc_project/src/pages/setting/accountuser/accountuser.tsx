import React from 'react';
import { Topbar } from '../../../components/topbar';
import { Menubar } from '../../../components/menu/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableAccountUser from './table-accountser';
import Nextpage from '../../../components/nextpage';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';


class AccountUser extends React.Component {
    Tatca() {
        const allelm: any = document.getElementById("tbacc")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            allrow[i].style.display = 'flex'
        }
    }
    Locvt(inner: string) {
        const allelm: any = document.getElementById("tbacc")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'none'
            for (let j = 0; j < allelmr.length; j++) {
                if (allelmr[j].className === "col5-accuser") {
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
    onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };

        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbacc")
        const allrow: any = allelm.children
        if (timkiem !== '') {
            for (let i = 1; i < allrow.length; i++) {
                const allelmr: any = allrow[i].children
                allrow[i].style.display = 'none'
                for (let j = 0; j < allelmr.length; j++) {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText.toLowerCase() === timkiem.toLowerCase()) {
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
        ip.value = text.innerText
        this.Locvt(ip.value)
        if (ip.value === 'Tất cả') {
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
                        <div className="sreach" onClick={() => this.show('tthd', 'up', 'down')}>
                            <input readOnly id='ip' className='tb-select' value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button id='down'><TiArrowSortedDown /></button>
                            <button id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='tthd' className='select-drop-down' onClick={() => this.show('tthd', 'up', 'down')}>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('kt', 'ip')}><label id='kt'>Kế toán</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('bs', 'ip')}><label id='bs'>Bác sĩ</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('ad', 'ip')}><label id='ad'>Admin</label></div>
                            <div className='select-drop-down-item ' onClick={() => this.Chose('sa', 'ip')}><label id='sa'>Super Admin</label></div>
                        </div>
                    </div>

                    <div className='tk'>
                        <p className='ppp'>Từ khóa</p>
                        <div className='sreach'>
                            <form autoComplete="off" onSubmit={this.onSumbit} >
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


