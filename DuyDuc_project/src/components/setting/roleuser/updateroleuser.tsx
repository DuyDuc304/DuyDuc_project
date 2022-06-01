import React from "react";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class UpdateRoleUser extends React.Component {
    setvalue() {
        const tvt: any = document.getElementById('tvt')
        tvt.value = 'Kế toán'
        const mt: any = document.getElementById('mt');
        mt.value = 'Chịu trách nhiệm thống kê số liệu và kiểm toán'
        const checktc: any = document.getElementById('checktc')
        checktc.checked = true
        const checkx: any = document.getElementById('checkx')
        checkx.checked = true
        const checky: any = document.getElementById('checky')
        checky.checked = true
        const checkz: any = document.getElementById('checkz')
        checkz.checked = true
    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp" onLoad={() => this.setvalue()}>
                    <div className='title-report-type'>Danh sách vai trò</div>
                    <form autoComplete="off">
                        <div className='roleuser-layout'>
                            <p className='text-tttb'>Thông tin vai trò</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên vai trò</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input id="tvt" type="text" name='TenVaiTro' placeholder="Nhập tên vai trò" ></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mô tả</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }} >*</p>
                                        </div>
                                        <textarea id="mt" name='Mota' placeholder="Nhập mô tả" className='input-mota' ></textarea>
                                    </div>

                                    <div className='row-ttbc' style={{ marginTop: '100px', marginLeft: '0px' }}>
                                        <p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p>
                                        <p className='text-ttbc'>Là trường thông tin bắt buộc</p>
                                    </div>


                                </div>
                                <div className='col-update-device' style={{ marginLeft: '20px' }}>
                                    <div className='col-update-device-item'>
                                        <div className='row' >
                                            <p className='text-mota'>Phân quyền chức năng</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </ div>
                                        <div className="roleuser-pqcn">

                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng A</p>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input id="checktc" name='TatCa' type="checkbox"></input>
                                                        <span className="checkmark" ></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input id="checkx" name='ChucNangX' type="checkbox" ></input>
                                                        <span className="checkmark" ></span>
                                                        <p>Chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input id="checky" name='ChucNangY' type="checkbox" ></input>
                                                        <span className="checkmark" ></span>
                                                        <p>Chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input id="checkz" name='ChucNangZ' type="checkbox" ></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng B</p>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='TatCa' type="checkbox"></input>
                                                        <span className="checkmark" ></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangX' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangY' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangZ' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng C</p>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='TatCa' type="checkbox"></input>
                                                        <span className="checkmark" ></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangX' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangY' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangZ' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng D</p>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='TatCa' type="checkbox"></input>
                                                        <span className="checkmark" ></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangX' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangY' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px', height: '30px' }}>
                                                    <label className="container">
                                                        <input name='ChucNangZ' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='buton-device'>
                            <a href="/RoleUser" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Cập nhật</button>
                        </div>
                    </form>
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='Quản lý vai trò ﹥' nametitle3='Cập nhật vai trò' href='/RoleUser' href2='' nametitle21='' />
                    <Menubar buttonid="qlvt" />
                </div>
            </div>
        )
    }
}
export default UpdateRoleUser;