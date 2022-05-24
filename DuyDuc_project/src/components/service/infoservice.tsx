import React from "react";
import Calendar from "react-calendar";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPen, FaRegCalendarAlt } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Menubar } from "../layout/menubar";
import Nextpage from "../layout/nextpage";
import { Topbar } from "../layout/topbar";

let newDate = new Date()
let day = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let setday = day + "/" + month + "/" + year;

class InfoService extends React.Component {
    OnClick() {
        const cld: any = document.querySelector('.daytime-picker-caledar-infoscv')
        if (cld.style.display == "none") {
            cld.style.display = "block";
        } else {
            cld.style.display = 'none';
        }


    }
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='title-report-type'>Quản lý thiết bị</div>
                    <div className="colum-service-ttdv">
                        <p className='text-tttb'>Thông tin dịch vụ</p>
                        <table className='table-infoservice'>
                            <tr>
                                <th>Mã dịch vụ:</th>
                                <td>201</td>
                            </tr>
                            <tr>
                                <th>Tên dịch vụ:</th>
                                <td>Khám tim mạch</td>
                            </tr>
                            <tr>
                                <th>Mô tả:</th>
                                <td>Chuyên các bệnh lý về tim</td>
                            </tr>
                        </table>
                        <p className='text-tttb'>Quy tắc cấp số</p>
                        <div className='row-checkbox' style={{ marginLeft: '-35px' }}>
                            <label className="container" >Tăng tự động từ:</label>
                            <input className='row-checkbox-input' type="text" value={'0001'}></input>
                            <label >đến</label>
                            <input className='row-checkbox-input' type="text" value={'9999'}></input>
                        </div>
                        <div className='row-checkbox' style={{ marginLeft: '-35px' }}>
                            <label className="container">Prefix: </label>
                            <input className='row-checkbox-input' type="text" value={'0001'} style={{ marginLeft: '82px' }}></input>

                        </div><div className='row-checkbox' style={{ marginLeft: '-35px' }}>
                            <label className="container">Reset mỗi ngày </label>
                        </div>
                        <p className='text-vd'> Ví dụ: 201-2001</p>


                    </div>

                    <div className="colum-table-infoservice ">
                        <div className="service-row">
                            <div className="service-trangthai ">
                                <p>Trạng thái</p>
                                <select className='select-trangthai'>
                                    <option value="all">Tất cả</option>
                                    <option value="DaHoangThanh">Đã hoàn thành</option>
                                    <option value="DaThucHien">Đã thực hiện</option>
                                    <option value="null">Vắng</option>
                                </select>
                            </div>
                            <div className="service-trangthai ">
                                <p>Chọn thời gian</p> <div className='ctg-row '>
                                    <div className='daytime-picker-sc' onClick={this.OnClick} >
                                        <FaRegCalendarAlt className='icon-calendar' />
                                        <p>{setday}</p>
                                    </div>
                                    <p style={{ color: '#535261', margin: '10px', display: 'flex' }} >▸</p>
                                    <div className='daytime-picker-sc' >
                                        <FaRegCalendarAlt className='icon-calendar' />
                                        <p>{setday}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-trangthai ">
                                <p >Từ khóa</p>
                                <div className='sreach-sv' >
                                    <form  >
                                        <input type="text" name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
                                        <button className="sreach-sv-button" type='submit'><AiOutlineSearch /></button>
                                    </form>

                                </div>

                            </div>
                        </div>
                        <div className="table-service-tt">
                            <div className="table-service-tt-colum-stt">
                                <div className="row-stt1"><p>Số thứ tự</p></div>
                                <div className="row-chung2"><p>2010001</p></div>
                                <div className="row-chung3"><p>2010002</p></div>
                                <div className="row-chung2"><p>2010003</p></div>
                                <div className="row-chung3"><p>2010004</p></div>
                                <div className="row-chung2"><p>2010005</p></div>
                                <div className="row-chung3"><p>2010006</p></div>
                                <div className="row-chung2"><p>2010007</p></div>
                                <div className="row-stt4"><p>2010008</p></div>
                            </div>
                            <div className="table-service-tt-colum-tt">
                                <div className="row-tt1">
                                    <p>Trạng thái</p>
                                </div>
                                <div className="row-chung2">
                                    <div className="div-center">
                                        <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Đã hoàn thành</p>
                                    </div>
                                </div>
                                <div className="row-chung3">
                                    <div className="div-center">
                                        <p style={{ color: " #5490EB", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Đang thực hiện</p>
                                    </div>
                                </div>
                                <div className="row-chung2">
                                    <div className="div-center">
                                        <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Đã hoàn thành</p>
                                    </div>
                                </div>
                                <div className="row-chung3">
                                    <div className="div-center">
                                        <p style={{ color: " #6C7585", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Vắng</p>
                                    </div>
                                </div>
                                <div className="row-chung2">
                                    <div className="div-center">
                                        <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Đã hoàn thành</p>
                                    </div>
                                </div>
                                <div className="row-chung3">
                                    <div className="div-center">
                                        <p style={{ color: " #5490EB", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Đang thực hiện</p>
                                    </div>
                                </div>
                                <div className="row-chung2">
                                    <div className="div-center">
                                        <p style={{ color: " #6C7585", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Vắng</p>
                                    </div>
                                </div>
                                <div className="row-tt4">
                                    <div className="div-center">
                                        <p style={{ color: " #35C75A", fontSize: '30px', margin: 'auto' }}>•</p>
                                        <p>Đã hoàn thành</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='daytime-picker-caledar-infoscv' id='cldsv'>
                        <Calendar locale='en' selectRange />
                    </div>
                    <a href='/Service/UpdateService'>
                        <div className='div-add' style={{ top: '172px' }}>
                            <div className='plus'><FaPen className='cong' /></div>
                            <div className='add'>
                                <p > Cập nhật</p>
                                <p >danh sách</p>
                            </div>
                        </div>
                    </a>
                    <a href='/Service'>
                        <div className='div-add' style={{ top: '267px', height: '75px' }}>
                            <div className='plus'><RiArrowGoBackLine className='cong' /></div>
                            <div className='add'>
                                <p > Quay lại</p>

                            </div>
                        </div>
                    </a>
                    <Nextpage />
                    <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='Danh sách dịch vụ ﹥ ' nametitle3='Chi tiết' href='/Service' href2='' nametitle21='' />
                    <Menubar buttonid="dv" />

                </div>
            </div >

        )
    }
}

export default InfoService;