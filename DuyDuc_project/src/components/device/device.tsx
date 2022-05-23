import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import TableDevice from './tabale-device';

class Device extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
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
                        <select className='tb-select' >
                            <option value="all">Tất cả</option>
                            <option value="act">Hoạt động</option>
                            <option value="notatc">Ngừng hoạt động</option>
                        </select>
                    </div>
                    <div className='ttkn'>
                        <p className='ppp'>Trạng thái kết nối</p>
                        <select className='tb-select'>
                            <option value="all">Tất cả</option>
                            <option value="conect">Kết nối</option>
                            <option value="unconect">Mất kết nối</option>
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
                    <div className='title-report-type'>Danh sách thiết bị</div>
                    <TableDevice />
                    <Topbar nametitle1='Thiết bị ﹥ ' nametitle2='' nametitle3='Danh sách thiết bị' href='' href2='' nametitle21='' />
                    <Menubar buttonid="tb" />

                </div>
            </div>
        );

    }


}

export default Device;


