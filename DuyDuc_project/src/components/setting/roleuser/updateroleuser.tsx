import React from "react";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class UpdateRoleUser extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='Quản lý vai trò ﹥' nametitle3='Cập nhật vai trò' href='/RoleUser' href2='' nametitle21='' />
                    <Menubar buttonid="qlvt" />
                </div>
            </div>
        )
    }
}
export default UpdateRoleUser;