import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/menu.css';
import Login from './components/login';
import Loginfail from './components/loginfail';
import reportWebVitals from './reportWebVitals';
import RessetPW from './components/ressetpw';
import RessetPWStep2 from './components/ressetpwstep2';
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
import DiaryUser from './components/diatyuser';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Device" element={<Device />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/AccountUser" element={<AccountUser />} />
        <Route path="/RoleUser" element={<RoleUser />} />
        <Route path='/NumberOrder' element={<NumberOrder />} />
        <Route path="/DiaryUser" element={<DiaryUser />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginfail" element={<Loginfail />} />
        <Route path="/ressetpwstep2" element={<RessetPWStep2 />} />
        <Route path="/ressetpw" element={<RessetPW />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
