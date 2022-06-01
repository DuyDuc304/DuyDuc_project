import React from "react";
import './tablereport.css'
import { TiArrowUnsorted } from "react-icons/ti";

class TableReport extends React.Component {

    dropdown(id: string) {
        const btn: any = document.getElementById(id)
        if (btn.style.display == 'none') {
            btn.style.display = 'block';
        }
        else {
            btn.style.display = 'none';
        }

    }

    render() {
        return (
            <div className='div-table-report' >
                <div className='row1'>
                    <div className="col1-report">
                        <div className="row-title-report" onClick={() => this.dropdown('stt')}>
                            <p className="col1-report-p">Số thứ tự</p>
                            <TiArrowUnsorted className="icon-updown-report" />
                        </div>
                    </div>
                    <div className="col2-report">
                        <div className="row-title-report" onClick={() => this.dropdown('tdv')}>
                            <p className="col1-report-p">Tên dịch vụ</p>
                            <TiArrowUnsorted className="icon-updown-report" style={{ marginLeft: '105px' }} />
                        </div>
                    </div>
                    <div className="col3-report">
                        <div className="row-title-report" onClick={() => this.dropdown('tgc')}>
                            <p className="col1-report-p">Thời gian cấp</p>
                            <TiArrowUnsorted className="icon-updown-report" style={{ marginLeft: '95px' }} />
                        </div>
                    </div>
                    <div className="col4-report">
                        <div className="row-title-report" onClick={() => this.dropdown('tt')}>
                            <p className="col1-report-p">Tình trạng</p>
                            <TiArrowUnsorted className="icon-updown-report" style={{ marginLeft: '95px' }} />
                        </div>
                    </div>
                    <div className="col5-report">
                        <div className="row-title-report" onClick={() => this.dropdown('nc')}>
                            <p className="col1-report-p">Nguồn cấp</p>
                            <TiArrowUnsorted className="icon-updown-report" style={{ marginLeft: '70px' }} />
                        </div>
                    </div>
                </div>
                <div className='row2'>
                    <div className="col1-report"><p>2010001</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-report"><p>2010002</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #6C7585", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đã sư dụng</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-report"><p>2010003</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #E73F3F", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Bỏ qua</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-report"><p>2010004</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #6C7585", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đã sư dụng</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-report"><p>2010005</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-report"><p>2010006</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #E73F3F", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Bỏ qua</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-report"><p>2010007</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-report"><p>2010008</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #E73F3F", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Bỏ qua</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-report"><p>2010009</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>
                <div className='row-end-report'>
                    <div className="col1-report"><p>20100010</p></div>
                    <div className="col2-report"><p>Khám tim mạch</p></div>
                    <div className="col3-report"><p>07:20 - 07/10/2021</p></div>
                    <div className="col4-report">
                        <div className="div-center">
                            <p style={{ color: " #6C7585", fontSize: '24px', margin: 'auto' }}>•</p>
                            <p>Đã sư dụng</p>
                        </div>
                    </div>
                    <div className="col5-report"><p>Kiosk</p></div>
                </div>

                <div className="drop-report" id="stt" onClick={() => this.dropdown('stt')}>
                    <div className="drop-item-report"><p className="report-p">Tất cả</p></div>
                    <div className="drop-item-report"><p className="report-p">2040001</p></div>
                    <div className="drop-item-report"><p className="report-p">2040002</p></div>
                    <div className="drop-item-report"><p className="report-p">2040003</p></div>
                    <div className="drop-item-report"><p className="report-p">2040004</p></div>
                    <div className="drop-item-report"><p className="report-p">2040005</p></div>
                    <div className="drop-item-report"><p className="report-p">2040006</p></div>
                    <div className="drop-item-report"><p className="report-p">2040007</p></div>
                    <div className="drop-item-report"><p className="report-p">2040008</p></div>
                </div>
                <div className="drop-report" id="tdv" onClick={() => this.dropdown('tdv')} style={{ marginLeft: '227px', width: '232px' }}>
                    <div className="drop-item-report">
                        <p className="report-p">Tất cả</p>
                        <label className="container" style={{ marginLeft: "auto" }}>
                            <input name='reset' type="checkbox" ></input>
                            <span className="checkmark"></span>
                        </label >
                    </div>
                    <div className="drop-item-report">
                        <p className="report-p">Khám tim mạch</p>
                        <label className="container" style={{ marginLeft: 'auto' }}>
                            <input name='reset' type="checkbox" ></input>
                            <span className="checkmark"></span>
                        </label >
                    </div>
                    <div className="drop-item-report">
                        <p className="report-p">Khám mắt</p>
                        <label className="container" style={{ marginLeft: 'auto' }}>
                            <input name='reset' type="checkbox" ></input>
                            <span className="checkmark"></span>
                        </label >
                    </div>
                    <div className="drop-item-report">
                        <p className="report-p">Khám răng hàm mặt</p>
                        <label className="container" style={{ marginLeft: 'auto' }}>
                            <input name='reset' type="checkbox" ></input>
                            <span className="checkmark"></span>
                        </label >
                    </div>
                    <div className="drop-item-report">
                        <p className="report-p">Khám phụ sản khoa</p>
                        <label className="container" style={{ marginLeft: 'auto' }}>
                            <input name='reset' type="checkbox" ></input>
                            <span className="checkmark"></span>
                        </label >
                    </div>
                </div>
                <div className="drop-report" id="tgc" onClick={() => this.dropdown('tgc')} style={{ marginLeft: '460px', width: '238px' }}>
                    <div className="drop-item-report"><p className="report-p">Tất cả</p></div>
                    <div className="drop-item-report"><p className="report-p">07:10 01/10/2021</p></div>
                    <div className="drop-item-report"><p className="report-p">07:10 01/10/2021</p></div>
                    <div className="drop-item-report"><p className="report-p">07:10 01/10/2021</p></div>
                    <div className="drop-item-report"><p className="report-p">07:10 01/10/2021</p></div>
                    <div className="drop-item-report"><p className="report-p">07:10 01/10/2021</p></div>
                    <div className="drop-item-report"><p className="report-p">07:10 01/10/2021</p></div>
                </div>
                <div className="drop-report" id="tt" onClick={() => this.dropdown('tt')} style={{ marginLeft: '700px', width: '216px', height: '176px' }}>
                    <div className="drop-item-report"><p className="report-p">Tất cả</p></div>
                    <div className="drop-item-report"><p className="report-p">Đang chờ</p></div>
                    <div className="drop-item-report"><p className="report-p">Đã sử dụng</p></div>
                    <div className="drop-item-report"><p className="report-p">Bỏ qua</p></div>

                </div>
                <div className="drop-report" id="nc" onClick={() => this.dropdown('nc')} style={{ marginLeft: '917px', width: '196px', height: '132px' }}>
                    <div className="drop-item-report"><p className="report-p">Tất cả</p></div>
                    <div className="drop-item-report"><p className="report-p">Kiosk</p></div>
                    <div className="drop-item-report"><p className="report-p">Hệ thống</p></div>

                </div>

            </div>
        )
    }
}
export default TableReport;