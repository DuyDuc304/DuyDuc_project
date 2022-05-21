import React from "react";
import './table.css'

class Table extends React.Component {
    showmore(id: string) {

        const btn: any = document.getElementById(id)
        if (btn.style.display == 'none')
            btn.style.display = 'flex';
        else {
            btn.style.display = 'none';
        }
        document.addEventListener("mousedown", (event) => {
            btn.style.display = 'none';
        })

    }

    render() {
        return (
            <div className='div-layout' >
                <div className='row1'>
                    <div className="colum1">
                        <p className="colulm1-p">Mã thiết bị</p>
                    </div>
                    <div className="colum2">
                        <p className="colulm1-p">Tên thiết bị</p>
                    </div>
                    <div className="colum3">
                        <p className="colulm1-p">Địa chỉ IP</p>
                    </div>
                    <div className="colum4">
                        <p className="colulm1-p">Trạng thái hoạt động</p>
                    </div>
                    <div className="colum5">
                        <p className="colulm1-p">Trạng thái kết nối</p>
                    </div>
                    <div className="colum6">
                        <p className="colulm1-p">Dịch vụ sử dụng</p>
                    </div>
                    <div className="colum7">
                        <p className="colulm1-p"></p>
                    </div>
                    <div className="colum8">
                        <p className="colulm1-p"></p>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Ngừng hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px' }}>•</p>
                            <p> Ngừng kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c2')}>Xem thêm</a>
                        <div className="div-more" id="c2">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>

                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px' }}>•</p>
                            <p>Kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c3')}>Xem thêm</a>
                        <div className="div-more" id="c3">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px' }}>•</p>
                            <p>Mất kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c4')}>Xem thêm</a>
                        <div className="div-more" id="c4">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px' }}>•</p>
                            <p>Mất kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c5')}>Xem thêm</a>
                        <div className="div-more" id="c5">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px' }}>•</p>
                            <p>Mát kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c6')}>Xem thêm</a>
                        <div className="div-more" id="c6">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Ngừng hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px' }}>•</p>
                            <p>Kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c7')}>Xem thêm</a>
                        <div className="div-more" id="c7">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px' }}>•</p>
                            <p>Kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c8')}>Xem thêm</a>
                        <div className="div-more" id="c8">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Ngừng hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px' }}>•</p>
                            <p>Kết nối</p>
                        </div>

                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c9')}>Xem thêm</a>
                        <div className="div-more" id="c9">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
                <div className='row4'>
                    <div className="colum1">
                        <p>KIO_01</p>
                    </div>
                    <div className="colum2">
                        <p>Kiosk</p>
                    </div>
                    <div className="colum3">
                        <p>192.168.1.10</p>
                    </div>
                    <div className="colum4">
                        <div className="div-center">
                            <p style={{ color: " red", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p> Ngừng hoạt động</p>
                        </div>
                    </div>
                    <div className="colum5">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum6" >
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <a onClick={() => this.showmore('c10')}>Xem thêm</a>
                        <div className="div-more" id="c10">Khám tim mạch, Khám Sản -
                            Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                    </div>
                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>


            </div>
        )
    }
}
export default Table;