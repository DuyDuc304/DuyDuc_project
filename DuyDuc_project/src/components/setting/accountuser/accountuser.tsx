import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableAccountUser from './table-accountser';
import Nextpage from '../../layout/nextpage';


class AccountUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
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
                        <select className='tb-select' >
                            <option value="all">Kế toán</option>
                            <option value="act">Quản lý</option>
                            <option value="notatc">Admin</option>
                            <option value="notatc">SuperAdmin</option>
                            <option value="notatc">Bác sĩ</option>
                        </select>
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
                    <TableAccountUser />
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


