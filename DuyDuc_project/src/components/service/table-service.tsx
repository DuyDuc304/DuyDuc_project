import React from "react";
import './tableservice.css'

class TableService extends React.Component {
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
                    <div className="colum1-service">
                        <p className="colum1-service-p">Mã dịch vụ</p>
                    </div>
                    <div className="colum2-service">
                        <p className="colum1-service-p">Tên dịch vụ</p>
                    </div>
                    <div className="colum3-service">
                        <p className="colum1-service-p">Mô tả</p>
                    </div>
                    <div className="colum4-service">
                        <p className="colum1-service-p">Trạng thái hoạt động</p>
                    </div>
                    <div className="colum5-service">
                        <p className="colum1-service-p"></p>
                    </div>
                    <div className="colum6-service">
                        <p className="colum1-service-p"></p>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Mô tả dịch vụ 1 </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #EC3740", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Ngừng kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row2'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #EC3740", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Ngừng kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row3'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
                <div className='row4'>
                    <div className="colum1-service">
                        <p >KIO_01</p>
                    </div>
                    <div className="colum2-service">
                        <p >Kiosk</p>
                    </div>
                    <div className="colum3-service">
                        <p >Hoạt động </p>
                    </div>
                    <div className="colum4-service">
                        <div className="div-center">
                            <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                            <p>Kết nối</p>
                        </div>
                    </div>
                    <div className="colum5-service">
                        <a href="">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>

            </div>
        )
    }
}
export default TableService;