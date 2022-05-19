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
import Dashboad from './components/dashboad';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboad" element={<Dashboad />} />
        <Route path="/Device" element={<Device />} />
        <Route path="/Service" element={<Service />} />
        <Route path='/NumberOrder' element={<NumberOrder />} />
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
