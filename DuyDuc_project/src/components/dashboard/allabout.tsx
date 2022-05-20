import React from "react"
import Service from "./service.svg"
import Calendar from "./calendar/calenda"
import { MdDesktopWindows } from "react-icons/md"

class AllAbout extends React.Component {
    render() {
        return (
            < div className="allabout">
                <div className="sumary">
                    <span className="title-Sumary">Tổng quan</span>
                    <div className="sumary-list">
                        <div className="sumary-item">
                            <img src={Service} />
                            <div className="info-sumary">
                                <p className="number-sumary">4000</p>
                                <span className="name-item-sumary "><MdDesktopWindows className='icon-sumary' />  <p className="name-sumary">Thiết bị</p></span>
                            </div>
                            <div className="info-sumary2">
                                <div className="line"><p className="text-sumary">Đang hoạt động</p ><p className="report-sumary-number"> 3.690</p></div>
                                <div className="line"><p className="text-sumary">Ngừng hoạt động</p><p className="report-sumary-number"> 690</p></div>
                            </div>
                        </div>
                        <div className="sumary-item">
                            <img src={Service} />
                            <div className="info-sumary">
                                <p className="number-sumary">4000</p>
                                <span className="name-item-sumary "><MdDesktopWindows className='icon-sumary' />  <p className="name-sumary">Thiết bị</p></span>
                            </div>
                            <div className="info-sumary2">
                                <div className="line"><p className="text-sumary">Đang hoạt động</p ><p className="report-sumary-number"> 3.690</p></div>
                                <div className="line"><p className="text-sumary">Ngừng hoạt động</p><p className="report-sumary-number"> 690</p></div>
                            </div>
                        </div>
                        <div className="sumary-item">
                            <img src={Service} />
                            <div className="info-sumary">
                                <p className="number-sumary">4000</p>
                                <span className="name-item-sumary "><MdDesktopWindows className='icon-sumary' />  <p className="name-sumary">Thiết bị</p></span>
                            </div>
                            <div className="info-sumary2">
                                <div className="line"><p className="text-sumary">Đang hoạt động</p ><p className="report-sumary-number"> 3.690</p></div>
                                <div className="line"><p className="text-sumary">Ngừng hoạt động</p><p className="report-sumary-number"> 690</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Calendar />
            </div >
        )
    }
}
export default AllAbout