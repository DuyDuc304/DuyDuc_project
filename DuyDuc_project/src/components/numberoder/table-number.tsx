import React from "react";
import './tablenumber.css'

class TableNumber extends React.Component {
    showmore(id: string) {

        const btn: any = document.getElementById(id)
        if (btn.style.display == 'none')
            btn.style.display = 'flex';

        document.addEventListener("mousedown", (event) => {
            btn.style.display = 'none';
        })

    }

    render() {
        return (
            <div className='div-layout' >
                <div className='row1'>
                    <div className="col-num1"><p className="colulm1-p">STT</p></div>
                    <div className="col-num2"><p className="colulm1-p">Tên khách hàng</p></div>
                    <div className="col-num3"><p className="colulm1-p">Tên dịch vụ</p></div>
                    <div className="col-num4"><p className="colulm1-p">Thời gian cấp</p></div>
                    <div className="col-num5"><p className="colulm1-p">Hạn sử dụng</p></div>
                    <div className="col-num6"><p className="colulm1-p">Trạng thái </p></div>
                    <div className="col-num7"><p className="colulm1-p">Nguồn cấp</p></div>
                    <div className="col-num8"></div>
                </div>
                <div className='row2'>
                    <div className="col-num1"><p >2010001</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tim mạch</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #6C7585", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đã sư dụng</p>
                        </div>
                    </div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row3'>
                    <div className="col-num1"><p >2010002</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tim mạch</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row2'>
                    <div className="col-num1"><p >2010003</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tim mạch</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row3'>
                    <div className="col-num1"><p >2010004</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám phụ khoa</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row2'>
                    <div className="col-num1"><p >2010005</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tim mạch</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #E73F3F", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Bỏ qua</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row3'>
                    <div className="col-num1"><p >2010006</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám răng hàm mặt</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #4277FF", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đang chờ</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row2'>
                    <div className="col-num1"><p >2010007</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tim mạch</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #6C7585", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đã sử dụng</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row3'>
                    <div className="col-num1"><p >2010008</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tổng quát</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #E73F3F", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Bỏ qua</p>
                        </div>
                    </div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>
                <div className='row4'>
                    <div className="col-num1"><p >2010009</p></div>
                    <div className="col-num2"><p >Lê Huỳnh Ái Vân </p></div>
                    <div className="col-num3"><p >Khám tim mạch</p></div>
                    <div className="col-num4"><p>14:35-07/10/2022</p></div>
                    <div className="col-num5"><p >14:35-09/10/2022</p></div>
                    <div className="col-num6">
                        <div className="div-center">
                            <p style={{ color: " #6C7585", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Đã sử dụng</p>
                        </div></div>
                    <div className="col-num7"><p >Kiosk</p></div>
                    <div className="col-num8"><a href="/NumberOrder/InfoNumberOrder">Chi tiết</a></div>
                </div>

            </div>
        )
    }
}
export default TableNumber;