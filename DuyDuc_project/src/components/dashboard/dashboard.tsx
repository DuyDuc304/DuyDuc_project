import React from 'react';

import '../layout/menubar';
import { Topbar } from '../layout/topbar';
import { Menubar } from '../layout/menubar';
import Chart from './chart';
import AllAbout from './allabout';
import sttdc from './sttdc.svg';
import sttdd from './sttdd.svg';
import sttc from './sttc.svg';
import sttdx from './sttdx.svg';
import { BsArrowUpShort } from 'react-icons/bs';




class Dashboard extends React.Component {
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <span className='title-report-type'>Biểu đồ cấp số</span>
                    <div className='report-chart-type-list'>


                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttdc} className="title-chart-type-item-name-img" />
                                    <p>Số thứ tự đã cấp</p>
                                </div>
                                <div className='title-chart-type-item-name'>

                                    <label className='solieu'>4520</label>
                                    <div className='phantram'><BsArrowUpShort className='phantram-up' /><a className='phantram-a'>23%</a></div>
                                </div>
                            </div>
                        </a>
                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttdd} className="title-chart-type-item-name-img" />
                                    <p>Số thứ tự đã cấp</p>
                                </div>
                                <div className='title-chart-type-item-name'>

                                    <label className='solieu'>4520</label>
                                    <div className='phantram'><BsArrowUpShort className='phantram-up' /><a className='phantram-a'>23%</a></div>
                                </div>
                            </div>
                        </a>
                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttc} className="title-chart-type-item-name-img" />
                                    <p>Số thứ tự đã cấp</p>
                                </div>
                                <div className='title-chart-type-item-name'>
                                    <label className='solieu'>4520</label>
                                    <div className='phantram'><BsArrowUpShort className='phantram-up' /><a className='phantram-a'>23%</a></div>
                                </div>
                            </div>
                        </a>
                        <a href="/NumberOrder" className='notline'>
                            <div className='report-chart-type-item'>
                                <div className='title-chart-type-item-name'>
                                    <img src={sttdx} className="title-chart-type-item-name-img" />
                                    <p>Số thứ tự đã cấp</p>
                                </div>
                                <div className='title-chart-type-item-name'>

                                    <label className='solieu'>4520</label>
                                    <div className='phantram'><BsArrowUpShort className='phantram-up' /><a className='phantram-a'>23%</a></div>
                                </div>
                            </div>
                        </a>





                    </div>
                    <Chart defaulchart='ngày' />
                    <AllAbout />
                    <Topbar nametitle1='' nametitle2='' nametitle3='Dashboard' href='' href2='' nametitle21='' />
                    <Menubar buttonid="db" />

                </div>
            </div>
        );

    }


}

export default Dashboard;


