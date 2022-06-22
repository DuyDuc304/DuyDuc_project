import * as React from "react"

import Calendar from "../../components/calendar/calenda"
import { MdDesktopWindows } from "react-icons/md"

import '@rhazegh/react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from '@rhazegh/react-circular-progressbar';
import { ImStack } from "react-icons/im";
import { GoCommentDiscussion } from "react-icons/go";




class AllAbout extends React.Component {
    // device
    deviceuse: number = 3799;
    devicenouse: number = 422;
    tbdhd: number = Math.floor(((this.deviceuse / (this.deviceuse + this.devicenouse)) * 100));
    // service
    serviceuse: number = 210;
    servicenouse: number = 66;
    dvdhd: number = Math.floor(((this.serviceuse / (this.serviceuse + this.servicenouse)) * 100));
    // order number
    numberwating: number = 3721;
    numberuse: number = 486;
    numbernext: number = 102;
    csdc: number = Math.floor(((this.numberwating / (this.numberuse + this.numberwating + this.numbernext)) * 100));
    csdsd: number = Math.floor(((this.numberuse / (this.numberuse + this.numberwating + this.numbernext)) * 100));


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
                                    <p className="number-sumary">{this.deviceuse + this.devicenouse}</p>
                                    <span className="name-item-sumary "><MdDesktopWindows className='icon-sumary' />  <p className="name-sumary">Thiết bị</p></span>
                                </div>
                                <div className="info-sumary2">
                                    <div className="line">
                                        <p style={{ color: " #FF7506" }}>•</p>
                                        <p className="text-sumary">Đang hoạt động</p >
                                        <p className="report-sumary-number"> {this.deviceuse}</p>
                                    </div>
                                    <div className="line">
                                        <p style={{ color: " #7E7D88" }}>•</p>
                                        <p className="text-sumary">Ngừng hoạt động</p>
                                        <p className="report-sumary-number"> {this.devicenouse}</p>
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
                                    <p className="number-sumary">{this.servicenouse + this.serviceuse}</p>
                                    <span className="name-item-sumary "><GoCommentDiscussion className='icon-sumary' style={{ color: "#4277FF" }} />  <p className="name-sumary" style={{ color: "#4277FF" }}>Dịch vụ</p></span>
                                </div>
                                <div className="info-sumary2">
                                    <div className="line">
                                        <p style={{ color: "#4277FF" }}> •</p>
                                        <p className="text-sumary">Đang hoạt động</p >
                                        <p style={{ color: "#4277FF" }} className="report-sumary-number"> {this.serviceuse}</p>
                                    </div>
                                    <div className="line">
                                        <p style={{ color: " #7E7D88" }}>•</p>
                                        <p className="text-sumary">Ngừng hoạt động</p>
                                        <p style={{ color: "#4277FF" }} className="report-sumary-number"> {this.servicenouse}</p>
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
                                    <p className="number-sumary">{this.numberuse + this.numbernext + this.numberwating}</p>
                                    <span className="name-item-sumary "><ImStack className='icon-sumary' style={{ color: "#35C75A" }} />  <p className="name-sumary" style={{ color: "#35C75A" }}>Cấp số</p></span>
                                </div>
                                <div className="info-sumary2">
                                    <div className="line">
                                        <p style={{ color: " #35C75A" }}>•</p>
                                        <p className="text-sumary">Đang chờ</p >
                                        <p className="report-sumary-number" style={{ color: "#35C75A" }}> {this.numberwating}</p>
                                    </div>
                                    <div className="line">
                                        <p style={{ color: " #7E7D88" }}>•</p>
                                        <p className="text-sumary">Đã sử dụng</p>
                                        <p className="report-sumary-number" style={{ color: "#35C75A" }}>{this.numberuse}</p>
                                    </div>
                                    <div className="line">
                                        <p style={{ color: " #F178B6" }}>•</p>
                                        <p className="text-sumary"> Đã bỏ qua</p>
                                        <p className="report-sumary-number" style={{ color: "#35C75A" }}>{this.numbernext}</p>
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