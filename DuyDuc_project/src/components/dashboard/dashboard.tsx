import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import Chart from './chart';

import sttdc from './sttdc.svg';
import sttdd from './sttdd.svg';
import sttc from './sttc.svg';
import sttdx from './sttdx.svg';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import AllAbout from './allabout';





class Dashboard extends React.Component {
    numberwating: number = 3721;
    numberuse: number = 486;
    numbernext: number = 102;
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <Chart defaulchart='ngày' />
                    <span className='title-report-type'>Biểu đồ cấp số</span>
                    <div className='report-chart-type-list'>


                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttdc} className="title-chart-type-item-name-img" alt='SoThuTuDaCap' />
                                    <p>Số thứ tự đã cấp</p>
                                </div>
                                <div className='title-chart-type-item-name'>

                                    <label className='solieu'>{this.numbernext + this.numberuse + this.numberwating}</label>
                                    <div className='phantram'><BsArrowUpShort className='phantram-up' /><label className='phantram-a'>32.41%</label></div>
                                </div>
                            </div>
                        </a>
                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttdd} className="title-chart-type-item-name-img" alt='SoThuTuDaSuDung' />
                                    <p>Số thứ tự đã sử dụng</p>
                                </div>
                                <div className='title-chart-type-item-name'>

                                    <label className='solieu'>{this.numberuse}</label>
                                    <div className='phantram' style={{ background: 'rgba(231, 63, 63, 0.15)' }}><BsArrowDownShort className='phantram-down' /><label className='phantram-a' style={{ color: '#E73F3F ' }}>32.41%</label></div>
                                </div>
                            </div>
                        </a>
                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttc} className="title-chart-type-item-name-img" alt='SoThuTuDangCho' />
                                    <p>Số thứ tự đang chờ</p>
                                </div>
                                <div className='title-chart-type-item-name'>
                                    <label className='solieu'>{this.numberwating}</label>
                                    <div className='phantram'><BsArrowUpShort className='phantram-up' /><label className='phantram-a'>56.41%</label></div>
                                </div>
                            </div>
                        </a>
                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttdx} className="title-chart-type-item-name-img" alt='SoThuTuDaBoQua' />
                                    <p>Số thứ tự đã bỏ qua</p>
                                </div>
                                <div className='title-chart-type-item-name'>

                                    <label className='solieu'>{this.numbernext}</label>
                                    <div className='phantram' style={{ background: 'rgba(231, 63, 63, 0.15)' }}>
                                        <BsArrowDownShort className='phantram-down' />
                                        <label className='phantram-a' style={{ color: '#E73F3F ' }}>22.41%</label></div>
                                </div>
                            </div>
                        </a>

                    </div>

                    <AllAbout />
                    <Topbar nametitle1='' nametitle2='' nametitle3='Dashboard' href='' href2='' nametitle21='' />
                    <Menubar buttonid="db" />

                </div>
            </div>
        );

    }


}

export default Dashboard;


