
import React from 'react';
import Login from './pages/login/login';
import { Routes, Route, } from "react-router-dom";
import './styles/App.css';
import Info from './pages/info';
import Device from './pages/device/device';
import NumberOrder from './pages/numberoder/numberorder';
import Service from './pages/service/service';
import Dashboard from './pages/dashboard/dashboard';
import Report from './pages/report/report';
import RoleUser from './pages/setting/roleuser/roleuser';
import AccountUser from './pages/setting/accountuser/accountuser';
import DiaryUser from './pages/setting/diaryuser/diaryuser';
import AddDevice from './pages/device/adddevice';
import InfoDevice from './pages/device/infodevice';
import AddService from './pages/service/addservice';
import AddNumber from './pages/numberoder/addnumber';
import RessetPW from './pages/login/ressetpw';
import UpdateDevice from './pages/device/updatedevice';
import UpdateService from './pages/service/updateservice';
import InfoService from './pages/service/infoservice';
import InfoNumberOrder from './pages/numberoder/infonumberorder';
import UpdateRoleUser from './pages/setting/roleuser/updateroleuser';
import AddRoleUser from './pages/setting/roleuser/addroleuser';
import UpdateAccountUser from './pages/setting/accountuser/updataaccountuser';
import AddAccountUser from './pages/setting/accountuser/addaccountuser';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                {/* Login */}
                <Route path="/" element={<Login />} />
                <Route path="/Ressetpw" element={<RessetPW />} />
                <Route path="/Login" element={<Login />} />

                {/* Dashboard, Report, Infouser */}
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Report" element={<Report />} />
                <Route path="/Info" element={<Info />} />

                {/* Device */}
                <Route path="/Device" element={<Device />} />
                <Route path="/Device/AddDevice" element={<AddDevice />} />
                <Route path="/Device/InfoDevice" element={<InfoDevice />} />
                <Route path="/Device/UpdateDevice" element={<UpdateDevice />} />

                {/* NumberoOrder */}
                <Route path='/NumberOrder' element={<NumberOrder />} />
                <Route path="/NumberOrder/AddNumber" element={<AddNumber />} />
                <Route path="/NumberOrder/InfoNumberOrder" element={<InfoNumberOrder />} />

                {/* RoleUser */}
                <Route path="/RoleUser" element={<RoleUser />} />
                <Route path="/RoleUser/UpdateRoleUser" element={<UpdateRoleUser />} />
                <Route path="/RoleUser/AddRoleUser" element={<AddRoleUser />} />

                {/* AccountUser */}
                <Route path="/AccountUser" element={<AccountUser />} />
                <Route path="/AccountUser/UpdateAccountUser" element={<UpdateAccountUser />} />
                <Route path="/AccountUser/AddAccountUser" element={<AddAccountUser />} />

                {/* Diary */}
                <Route path="/DiaryUser" element={<DiaryUser />} />


                {/* Service */}
                <Route path="/Service" element={<Service />} />
                <Route path="/Service/AddService" element={<AddService />} />
                <Route path="/Service/UpdateService" element={<UpdateService />} />
                <Route path="/Service/InfoService" element={<InfoService />} />

            </Routes>
        </div>

    )
}

export default App;