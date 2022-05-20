import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/menu.css';
import Login from './components/login/login';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './styles/App.css';

import Info from './components/info';
import Device from './components/device';
import NumberOrder from './components/numberorder';
import Service from './components/service';
import Dashboard from './components/dashboard';
import Report from './components/report';
import RoleUser from './components/roleuser';
import AccountUser from './components/accountuser';
import DiaryUser from './components/diaryuser';
import AddDevice from './components/adddevice';
import AddService from './components/addservice';
import AddNumber from './components/addnumber';
import RessetPW from './components/login/ressetpw';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Device/AddDevice" element={<AddDevice />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Device" element={<Device />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/AccountUser" element={<AccountUser />} />
        <Route path="/RoleUser" element={<RoleUser />} />
        <Route path='/NumberOder' element={<NumberOrder />} />
        <Route path="/DiaryUser" element={<DiaryUser />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/NumberOrder/AddNumber" element={<AddNumber />} />
        <Route path="/Service/AddService" element={<AddService />} />
        <Route path="/ressetpw" element={<RessetPW />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
