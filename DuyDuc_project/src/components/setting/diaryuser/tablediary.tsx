import React from "react";
import './tablediary.css'


class TableDiary extends React.Component {

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
                    <div className="col1-diary"><p className="colulm1-p">Tên đăng nhập</p></div>
                    <div className="col2-diary"><p className="colulm1-p">Thời gian tác động</p></div>
                    <div className="col3-diary"><p className="colulm1-p">IP thực hiện</p></div>
                    <div className="col14-diary"><p className="colulm1-p">Thao tác thực hiện</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row3'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row2'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
                <div className='row-end-report'>
                    <div className="col1-diary"><p>Tuyetnguyen@12</p></div>
                    <div className="col2-diary"><p>01/12/2021 15:12:17</p></div>
                    <div className="col3-diary"><p>192.168.3.1</p></div>
                    <div className="col4-diary"><p>Cập nhật thông tin dịch vụ DV_01</p></div>
                </div>
            </div>
        )
    }
}
export default TableDiary;