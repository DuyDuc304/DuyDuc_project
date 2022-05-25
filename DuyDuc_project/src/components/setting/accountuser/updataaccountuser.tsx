import React from "react";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class UpdateAccountUser extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='Quản lý tài khoản ﹥' nametitle3='Cập nhật tài khoản' href='/AccountUser' href2='' nametitle21='' />
                    <Menubar buttonid="qlvt" />
                </div>
            </div>
        )
    }
}
export default UpdateAccountUser;