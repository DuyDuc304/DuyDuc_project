import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableRoleUser from './table-roleuser';


class RoleUser extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <a href='/RoleUser/AddRoleUser'>
                        <div className='div-add' style={{ top: '192px' }}>
                            <div className='plus'><AiOutlinePlus className='cong' /></div>
                            <div className='add'>
                                <p > Thêm </p>
                                <p >vai trò</p>
                            </div>
                        </div>
                    </a>
                    <div className='title-report-type'>Danh sách vai trò</div>
                    <div className="tk-diary">
                        <p>Từ khóa</p>
                        <div className='sreach-qlcs' >
                            <form  >
                                <input type="text" name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
                                <button className="sreach-sv-button" type='submit'><AiOutlineSearch /></button>
                            </form>
                        </div>
                    </div>
                    <TableRoleUser />
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='' nametitle3='Quản lý vai trò' href='' href2='' nametitle21='' />
                    <Menubar buttonid="qlvt" />

                </div>
            </div>
        );

    }


}

export default RoleUser;


