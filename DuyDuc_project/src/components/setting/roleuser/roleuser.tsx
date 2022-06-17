import React from 'react';

import '../../layout/menubar';
import { Topbar } from '../../layout/topbar';
import { Menubar } from '../../layout/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableRoleUser from './table-roleuser';


class RoleUser extends React.Component {
    onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };

        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbvt")
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
                        <div className='sreach-qlcs' style={{ marginTop: '-8px' }} >
                            <form autoComplete="off" onSubmit={this.onSumbit}  >
                                <input type="text" id='tk' name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
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


