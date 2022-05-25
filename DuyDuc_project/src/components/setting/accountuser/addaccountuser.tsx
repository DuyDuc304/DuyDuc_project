import React from "react";
import { Menubar } from "../../layout/menubar";
import { Topbar } from "../../layout/topbar";

class AddAccountUser extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Topbar nametitle1='Cài đặt hệ thống ﹥ ' nametitle2='Quản lý tài khoản ﹥' nametitle3='Thêm tài khoản' href='/AccountUser' href2='' nametitle21='' />
                    <Menubar buttonid="qlvt" />
                </div>
            </div>
        )
    }
}
export default AddAccountUser;