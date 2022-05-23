import React from "react"
import Service from "./service.svg"
import Calendar from "./calendar/calenda"
import { MdDesktopWindows, MdOutlineForum } from "react-icons/md"
import Dervice from './dervice.svg';
import Numberorder from './numberoder.svg';

import { ImStack } from "react-icons/im";
import ApexCharts from "apexcharts";


export const AllAbout = () => {
    var options = {
        series: [44, 55],
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '14px',
                    },
                    value: {
                        fontSize: '14px',
                    },
                    total: {
                        show: true,
                        label: 'Total',

                    }
                }
            }
        },
        labels: ['Apples', 'Oranges'],
    };

    var chart = new ApexCharts(document.getElementById('dvchart'), options);
    chart.render();

    return (
        < div className="allabout">
            <div className="sumary">
                <span className="title-Sumary">Tổng quan</span>
                <div className="sumary-list">

                    <a href="/Device" className="notline">
                        <div className="sumary-item">
                            <div id="dvchart" className='sumary-item-img' >
                                {/* <ReactApexChart options={options} /> */}
                            </div>
                            <div className="info-sumary">
                                <p className="number-sumary">4.221</p>
                                <span className="name-item-sumary "><MdDesktopWindows className='icon-sumary' />  <p className="name-sumary">Thiết bị</p></span>
                            </div>
                            <div className="info-sumary2">
                                <div className="line">
                                    <p style={{ color: " #FF7506" }}>•</p>
                                    <p className="text-sumary">Đang hoạt động</p >
                                    <p className="report-sumary-number"> 3.799</p>
                                </div>
                                <div className="line">
                                    <p style={{ color: " #7E7D88" }}>•</p>
                                    <p className="text-sumary">Ngừng hoạt động</p>
                                    <p className="report-sumary-number"> 422</p>
                                </div>
                            </div>
                        </div>
                    </a>


                    <a href="/Service" className="notline">
                        <div className="sumary-item">
                            <img src={Dervice} className='sumary-item-img' />
                            <div className="info-sumary">
                                <p className="number-sumary">276</p>
                                <span className="name-item-sumary "><MdOutlineForum className='icon-sumary' style={{ color: "#4277FF" }} />  <p className="name-sumary" style={{ color: "#4277FF" }}>Dịch vụ</p></span>
                            </div>
                            <div className="info-sumary2">
                                <div className="line">
                                    <p style={{ color: "#4277FF" }}> •</p>
                                    <p className="text-sumary">Đang hoạt động</p >
                                    <p style={{ color: "#4277FF" }} className="report-sumary-number"> 210</p>
                                </div>
                                <div className="line">
                                    <p style={{ color: " #7E7D88" }}>•</p>
                                    <p className="text-sumary">Ngừng hoạt động</p>
                                    <p style={{ color: "#4277FF" }} className="report-sumary-number"> 66</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/NumberOrder" className="notline">
                        <div className="sumary-item">
                            <img src={Numberorder} className='sumary-item-img' />
                            <div className="info-sumary">
                                <p className="number-sumary">4.221</p>
                                <span className="name-item-sumary "><ImStack className='icon-sumary' style={{ color: "#35C75A" }} />  <p className="name-sumary" style={{ color: "#35C75A" }}>Cấp số</p></span>
                            </div>
                            <div className="info-sumary2">
                                <div className="line">
                                    <p style={{ color: " #35C75A" }}>•</p>
                                    <p className="text-sumary">Đang chờ</p >
                                    <p className="report-sumary-number" style={{ color: "#35C75A" }}> 3.721</p>
                                </div>
                                <div className="line">
                                    <p style={{ color: " #7E7D88" }}>•</p>
                                    <p className="text-sumary">Đã sử dụng</p>
                                    <p className="report-sumary-number" style={{ color: "#35C75A" }}>486</p>
                                </div>
                                <div className="line">
                                    <p style={{ color: " #F178B6" }}>•</p>
                                    <p className="text-sumary"> Đã bỏ qua</p>
                                    <p className="report-sumary-number" style={{ color: "#35C75A" }}>32</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div >
            <Calendar />
        </div >
    )
}
