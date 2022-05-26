import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login/login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './styles/App.css';
import Info from './components/info';
import Device from './components/device/device';
import NumberOrder from './components/numberoder/numberorder';
import Service from './components/service/service';
import Dashboard from './components/dashboard/dashboard';
import Report from './components/report/report';
import RoleUser from './components/setting/roleuser/roleuser';
import AccountUser from './components/setting/accountuser/accountuser';
import DiaryUser from './components/setting/diaryuser/diaryuser';
import AddDevice from './components/device/adddevice';
import InfoDevice from './components/device/infodevice';
import AddService from './components/service/addservice';
import AddNumber from './components/numberoder/addnumber';
import RessetPW from './components/login/ressetpw';
import UpdateDevice from './components/device/updatedevice';
import UpdateService from './components/service/updateservice';
import InfoService from './components/service/infoservice';
import InfoNumberOrder from './components/numberoder/infonumberorder';
import UpdateRoleUser from './components/setting/roleuser/updateroleuser';
import AddRoleUser from './components/setting/roleuser/addroleuser';
import UpdateAccountUser from './components/setting/accountuser/updataaccountuser';
import AddAccountUser from './components/setting/accountuser/addaccountuser';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ressetpw" element={<RessetPW />} />
        <Route path="/login" element={<Login />} />

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
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
