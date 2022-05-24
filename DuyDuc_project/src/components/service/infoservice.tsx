import React from "react";
import { Menubar } from "../layout/menubar";
import Nextpage from "../layout/nextpage";
import { Topbar } from "../layout/topbar";

class InfoService extends React.Component {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className="colum-service-ttdv"></div>
                    <div className="colum-table-infoservice "></div>
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <Nextpage />
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='Danh sách dịch vụ ﹥ ' nametitle3='Chi tiết' href='/Service' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />

                </div>
            </div>

        )
    }
}

export default InfoService;