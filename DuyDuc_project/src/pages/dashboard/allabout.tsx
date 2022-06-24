import * as React from "react"

import Calendar from "../../components/calendar/calenda"
import { MdDesktopWindows } from "react-icons/md"

import '@rhazegh/react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from '@rhazegh/react-circular-progressbar';
import { ImStack } from "react-icons/im";
import { GoCommentDiscussion } from "react-icons/go";
import { useNavigate } from "react-router-dom";




const AllAbout = () => {
    const navigate = useNavigate()
    // device
    var deviceuse: number = 3799;
    var devicenouse: number = 422;
    var tbdhd: number = Math.floor(((deviceuse / (deviceuse + devicenouse)) * 100));
    // service
    var serviceuse: number = 210;
    var servicenouse: number = 66;
    var dvdhd: number = Math.floor(((serviceuse / (serviceuse + servicenouse)) * 100));
    // order number
    var numberwating: number = 3721;
    var numberuse: number = 486;
    var numbernext: number = 102;
    var csdc: number = Math.floor(((numberwating / (numberuse + numberwating + numbernext)) * 100));
    var csdsd: number = Math.floor(((numberuse / (numberuse + numberwating + numbernext)) * 100));


    return (
        < div className="allabout">
            <div className="sumary">
                <span className="title-Sumary">Tổng quan</span>
                <div className="sumary-list">


                    <div className="sumary-item" onClick={() => navigate('/Device')}>
                        <div className='chart-circula ' >
                            <CircularProgressbarWithChildren
                                value={tbdhd}
                                strokeWidth={5}
                                text={tbdhd + '%'}
                                styles={buildStyles({
                                    textColor: '#535261',

                                    textSize: '24px',
                                    pathColor: "#FF7506",

                                })}
                            >
                                <div style={{ width: "84%" }}>
                                    <CircularProgressbar
                                        value={100 - tbdhd}

                                        strokeWidth={5}
                                        styles={buildStyles({
                                            pathColor: "#7E7D88",
                                        })}
                                    />
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="info-sumary">
                            <p className="number-sumary">{deviceuse + devicenouse}</p>
                            <span className="name-item-sumary "><MdDesktopWindows className='icon-sumary' />  <p className="name-sumary">Thiết bị</p></span>
                        </div>
                        <div className="info-sumary2">
                            <div className="line">
                                <p style={{ color: " #FF7506" }}>•</p>
                                <p className="text-sumary">Đang hoạt động</p >
                                <p className="report-sumary-number"> {deviceuse}</p>
                            </div>
                            <div className="line">
                                <p style={{ color: " #7E7D88" }}>•</p>
                                <p className="text-sumary">Ngừng hoạt động</p>
                                <p className="report-sumary-number"> {devicenouse}</p>
                            </div>
                        </div>
                    </div>




                    <div className="sumary-item" onClick={() => navigate('/Service')}>
                        <div className='chart-circula '>
                            <CircularProgressbarWithChildren
                                value={dvdhd}
                                strokeWidth={5}
                                text={dvdhd + '%'}
                                styles={buildStyles({
                                    textColor: '#535261',

                                    textSize: '24px',
                                    pathColor: "#4277FF",

                                })}
                            >
                                <div style={{ width: "84%" }}>
                                    <CircularProgressbar
                                        value={100 - dvdhd}
                                        strokeWidth={5}
                                        styles={buildStyles({
                                            pathColor: "#7E7D88",
                                        })}
                                    />
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="info-sumary">
                            <p className="number-sumary">{servicenouse + serviceuse}</p>
                            <span className="name-item-sumary "><GoCommentDiscussion className='icon-sumary' style={{ color: "#4277FF" }} />  <p className="name-sumary" style={{ color: "#4277FF" }}>Dịch vụ</p></span>
                        </div>
                        <div className="info-sumary2">
                            <div className="line">
                                <p style={{ color: "#4277FF" }}> •</p>
                                <p className="text-sumary">Đang hoạt động</p >
                                <p style={{ color: "#4277FF" }} className="report-sumary-number"> {serviceuse}</p>
                            </div>
                            <div className="line">
                                <p style={{ color: " #7E7D88" }}>•</p>
                                <p className="text-sumary">Ngừng hoạt động</p>
                                <p style={{ color: "#4277FF" }} className="report-sumary-number"> {servicenouse}</p>
                            </div>
                        </div>
                    </div>


                    <div className="sumary-item" onClick={() => navigate('/NumberOrder')}>
                        <div className='chart-circula ' >
                            <CircularProgressbarWithChildren
                                value={csdc}
                                strokeWidth={5}
                                text={csdc + '%'}
                                styles={buildStyles({
                                    textColor: '#535261',
                                    textSize: '24px',
                                    pathColor: "#35C75A",

                                })}
                            >
                                <div style={{ width: "84%" }}>
                                    <CircularProgressbarWithChildren
                                        value={csdsd}

                                        strokeWidth={5}
                                        styles={buildStyles({
                                            pathColor: "#7E7D88",
                                        })}
                                    >
                                        <div style={{ width: "84%" }}>
                                            <CircularProgressbar
                                                value={100 - (csdc + csdsd)}
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
                            <p className="number-sumary">{numberuse + numbernext + numberwating}</p>
                            <span className="name-item-sumary "><ImStack className='icon-sumary' style={{ color: "#35C75A" }} />  <p className="name-sumary" style={{ color: "#35C75A" }}>Cấp số</p></span>
                        </div>
                        <div className="info-sumary2">
                            <div className="line">
                                <p style={{ color: " #35C75A" }}>•</p>
                                <p className="text-sumary">Đang chờ</p >
                                <p className="report-sumary-number" style={{ color: "#35C75A" }}> {numberwating}</p>
                            </div>
                            <div className="line">
                                <p style={{ color: " #7E7D88" }}>•</p>
                                <p className="text-sumary">Đã sử dụng</p>
                                <p className="report-sumary-number" style={{ color: "#35C75A" }}>{numberuse}</p>
                            </div>
                            <div className="line">
                                <p style={{ color: " #F178B6" }}>•</p>
                                <p className="text-sumary"> Đã bỏ qua</p>
                                <p className="report-sumary-number" style={{ color: "#35C75A" }}>{numbernext}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            <Calendar />
        </div >
    )
}

export default AllAbout;