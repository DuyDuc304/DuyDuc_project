import React from "react";
import './table-roleuser.css'


class TableRoleUser extends React.Component {



    render() {
        return (
            <div className='div-table-report' id="tbvt" >
                <div className='row1'>
                    <div className="col1-roleuser"> <p className="colulm1-p">Tên vai trò</p></div>
                    <div className="col2-roleuser"> <p className="colulm1-p"> Số người dùng</p></div>
                    <div className="col3-roleuser"> <p className="colulm1-p">Mô tả</p></div>
                    <div className="col4-roleuser"> </div>
                </div>
                <div className='row2'>
                    <div className="col1-roleuser"><p>Kế toán</p> </div>
                    <div className="col2-roleuser"><p>6</p> </div>
                    <div className="col3-roleuser"> <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>
                <div className='row3'>
                    <div className="col1-roleuser"><p>Bác sĩ</p> </div>
                    <div className="col2-roleuser"><p>6</p> </div>
                    <div className="col3-roleuser"> <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>
                <div className='row2'>
                    <div className="col1-roleuser"><p>Lễ tân</p> </div>
                    <div className="col2-roleuser"><p>6</p> </div>
                    <div className="col3-roleuser"> <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>
                <div className='row3'>
                    <div className="col1-roleuser"><p>Quản lý</p> </div>
                    <div className="col2-roleuser"><p>6</p> </div>
                    <div className="col3-roleuser"> <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>
                <div className='row2'>
                    <div className="col1-roleuser"><p>Admin</p> </div>
                    <div className="col2-roleuser"><p>6</p> </div>
                    <div className="col3-roleuser"> <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>


                <div className='row-end-report'>
                    <div className="col1-roleuser"><p>SuperAdmin</p> </div>
                    <div className="col2-roleuser"><p>6</p> </div>
                    <div className="col3-roleuser"> <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>
            </div>
        )
    }
}
export default TableRoleUser;