import React from "react";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class AddRoleUser extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <form >
                        <div className='roleuser-layout'>
                            <p className='text-tttb'>Thông tin thiết bị</p>

                            <div className='row-update-device'>
                                <div className='col-update-device'>
                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Tên vai trò</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <input type="text" name='TenVaiTro' placeholder="Nhập tên vai trò"></input>
                                    </div>

                                    <div className='col-update-device-item'>
                                        <div className='row'>
                                            <p>Mô tả</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </div>
                                        <textarea name='Mota' placeholder="Nhập mô tả" className='input-mota'></textarea>
                                    </div>

                                    <div className='row-ttbc' style={{ marginTop: '100px', marginLeft: '0px' }}>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        <p className='text-ttbc'>Là trường thông tin bắt buộc</p>
                                    </div>


                                </div>
                                <div className='col-update-device'>
                                    <div className=''>
                                        <div className='row' style={{ marginLeft: '20px' }}>
                                            <p className='text-mota'>Phân quyền chức năng</p>
                                            <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                        </ div>
                                        <div className="roleuser-pqcn">

                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng A</p>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng B</p>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="div-ncn">
                                                <p className="title-ncn">Nhóm chức năng C</p>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Tất cả</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng x</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng y</p>
                                                    </label>
                                                </div>
                                                <div className='row-checkbox' style={{ margin: '0px' }}>
                                                    <label className="container">
                                                        <input name='TangTuDong' type="checkbox"></input>
                                                        <span className="checkmark"></span>
                                                        <p>Nhóm chức năng z</p>
                                                    </label>
                                                </div>
                                            </div>



                                        </div>


                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className='buton-device'>
                            <a href="/Service" className='button-huy' > Hủy bỏ</a>
                            <button className='myform-button ' type='submit'>Thêm thiêt bị</button>
                        </div>
                    </form>
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='Quản lý vai trò ﹥' nametitle3='Thêm vai trò' href='/RoleUser' href2='' nametitle21='' />
                    <Menubar buttonid="qlvt" />
                </div>
            </div>
        )
    }
}
export default AddRoleUser;