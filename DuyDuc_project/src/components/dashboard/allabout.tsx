import * as React from "react"

import Calendar from "./calendar/calenda"
import { MdDesktopWindows, MdOutlineForum } from "react-icons/md"

import Numberorder from './numberoder.svg';
import '@rhazegh/react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from '@rhazegh/react-circular-progressbar';
import { ImStack } from "react-icons/im";




class AllAbout extends React.Component {

    // value chart cricle
    tbdhd: number = 90;
    dvdhd: number = 76;
    csdc: number = 86;
    csdsd: number = 10;


    render() {
        return (
            < div className="allabout">
                <div className="sumary">
                    <span className="title-Sumary">Tổng quan</span>
                    <div className="sumary-list">

                        <a href="/Device" className="notline">
                            <div className="sumary-item">
                                <div className='chart-circula ' >
                                    <CircularProgressbarWithChildren
                                        value={this.tbdhd}
                                        strokeWidth={5}
                                        text={this.tbdhd + '%'}
                                        styles={buildStyles({
                                            textColor: '#535261',

                                            textSize: '24px',
                                            pathColor: "#FF7506",

                                        })}
                                    >
                                        <div style={{ width: "84%" }}>
                                            <CircularProgressbar
                                                value={100 - this.tbdhd}

                                                strokeWidth={5}
                                                styles={buildStyles({
                                                    pathColor: "#7E7D88",
                                                })}
                                            />
                                        </div>
                                    </CircularProgressbarWithChildren>
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
                                <div className='chart-circula '>
                                    <CircularProgressbarWithChildren
                                        value={this.dvdhd}
                                        strokeWidth={5}
                                        text={this.dvdhd + '%'}
                                        styles={buildStyles({
                                            textColor: '#535261',

                                            textSize: '24px',
                                            pathColor: "#4277FF",

                                        })}
                                    >
                                        <div style={{ width: "84%" }}>
                                            <CircularProgressbar
                                                value={100 - this.dvdhd}
                                                strokeWidth={5}
                                                styles={buildStyles({
                                                    pathColor: "#7E7D88",
                                                })}
                                            />
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
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
                                <div className='chart-circula ' >
                                    <CircularProgressbarWithChildren
                                        value={this.csdc}
                                        strokeWidth={5}
                                        text={this.csdc + '%'}
                                        styles={buildStyles({
                                            textColor: '#535261',
                                            textSize: '24px',
                                            pathColor: "#35C75A",

                                        })}
                                    >
                                        <div style={{ width: "84%" }}>
                                            <CircularProgressbarWithChildren
                                                value={this.csdsd}

                                                strokeWidth={5}
                                                styles={buildStyles({
                                                    pathColor: "#7E7D88",
                                                })}
                                            >
                                                <div style={{ width: "84%" }}>
                                                    <CircularProgressbar
                                                        value={100 - (this.csdc + this.csdsd)}
                                                        strokeWidth={5}
                                                        styles={buildStyles({
                                                            pathColor: "#F178B6",
                                                        })}
                                                    />
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        </div>

                                    </CircularProgressbarWithChildren>
                                </div>
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
}
export default AllAbout;