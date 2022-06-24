import React from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';
import Chart from './chart';

import sttdc from '../../assets/images/sttdc.svg';
import sttdd from '../../assets/images/sttdd.svg';
import sttc from '../../assets/images/sttc.svg';
import sttdx from '../../assets/images/sttdx.svg';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import AllAbout from './allabout';
import { useNavigate } from 'react-router-dom';





const Dashboard = () => {
    const navigate = useNavigate();
    var numberwating: number = 3721;
    var numberuse: number = 486;
    var numbernext: number = 102;

    return (
        <div className='bg'>
            <div className="Backgroundapp">
                <Chart defaulchart='ngày' />
                <span className='title-report-type'>Biểu đồ cấp số</span>
                <div className='report-chart-type-list'>

                    <div className='report-chart-type-item' onClick={() => navigate('/NumberOrder')}>
                        <div className='title-chart-type-item-name'>
                            <img src={sttdc} className="title-chart-type-item-name-img" alt='SoThuTuDaCap' />
                            <p>Số thứ tự đã cấp</p>
                        </div>
                        <div className='title-chart-type-item-name'>
                            <label className='solieu' style={{ cursor: 'pointer' }}>{numbernext + numberuse + numberwating}</label>
                            <div className='phantram'><BsArrowUpShort className='phantram-up' /><label className='phantram-a'>32.41%</label></div>
                        </div>
                    </div>


                    <div className='report-chart-type-item' onClick={() => navigate('/NumberOrder')}>
                        <div className='title-chart-type-item-name'>
                            <img src={sttdd} className="title-chart-type-item-name-img" alt='SoThuTuDaSuDung' />
                            <p>Số thứ tự đã sử dụng</p>
                        </div>
                        <div className='title-chart-type-item-name'>

                            <label style={{ cursor: 'pointer' }} className='solieu'>{numberuse}</label>
                            <div className='phantram' style={{ background: 'rgba(231, 63, 63, 0.15)' }}><BsArrowDownShort className='phantram-down' /><label className='phantram-a' style={{ color: '#E73F3F ' }}>32.41%</label></div>
                        </div>
                    </div>


                    <div className='report-chart-type-item' onClick={() => navigate('/NumberOrder')}>
                        <div className='title-chart-type-item-name'>
                            <img src={sttc} className="title-chart-type-item-name-img" alt='SoThuTuDangCho' />
                            <p>Số thứ tự đang chờ</p>
                        </div>
                        <div className='title-chart-type-item-name'>
                            <label style={{ cursor: 'pointer' }} className='solieu'>{numberwating}</label>
                            <div className='phantram'><BsArrowUpShort className='phantram-up' /><label className='phantram-a'>56.41%</label></div>
                        </div>
                    </div>


                    <div className='report-chart-type-item' onClick={() => navigate('/NumberOrder')}>
                        <div className='title-chart-type-item-name'>
                            <img src={sttdx} className="title-chart-type-item-name-img" alt='SoThuTuDaBoQua' />
                            <p>Số thứ tự đã bỏ qua</p>
                        </div>
                        <div className='title-chart-type-item-name'>

                            <label style={{ cursor: 'pointer' }} className='solieu'>{numbernext}</label>
                            <div className='phantram' style={{ background: 'rgba(231, 63, 63, 0.15)' }}>
                                <BsArrowDownShort className='phantram-down' />
                                <label className='phantram-a' style={{ color: '#E73F3F ' }}>22.41%</label></div>
                        </div>
                    </div>


                </div>

                <AllAbout />
                <Topbar nametitle1='' nametitle2='' nametitle3='Dashboard' href='' href2='' nametitle21='' />
                <Menubar buttonid="db" />

            </div>
        </div>
    );

}




export default Dashboard;


