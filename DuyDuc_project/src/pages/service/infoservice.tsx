import React from "react";
import Calendar from "react-calendar";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPen, FaRegCalendarAlt } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Menubar } from "../../components/menu/menubar";
import Nextpage from "../../components/nextpage";
import { Topbar } from "../../components/topbar";

let newDate = new Date()
let day = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let setday = day + "/" + month + "/" + year;

const InfoService = () => {
    const nav = useNavigate()
    function OnClick() {
        const cld: any = document.querySelector('.daytime-picker-caledar-infoscv')
        if (cld.style.display === "none") {
            cld.style.display = "block";
        } else {
            cld.style.display = 'none';
        }


    }
    function Chose(id: string, input: string) {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    function show(id: string, u: string, d: string) {
        const ip: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (ip.style.display === 'none') {
            ip.style.display = 'block';
            up.style.display = 'flex';
            down.style.display = 'none';
        } else {
            ip.style.display = 'none';
            down.style.display = 'flex';
            up.style.display = 'none';
        }
    }

    return (
        <div className='bg'>
            <div className="Backgroundapp">
                <div className='title-report-type'>Quản lý dịch vụ</div>
                <div className="colum-service-ttdv">
                    <p className='text-tttb'>Thông tin dịch vụ</p>
                    <table className='table-infoservice'>
                        <tbody>
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
                        </tbody>
                    </table>
                    <p className='text-tttb'>Quy tắc cấp số</p>
                    <div className='row-checkbox' style={{ marginLeft: '-35px' }}>
                        <label className="container" >Tăng tự động từ:</label>
                        <div className='row-checkbox-input' ><p style={{ marginTop: '10px' }}>0001</p></div>
                        <label >đến</label>
                        <div className='row-checkbox-input'  ><p style={{ marginTop: '10px' }}>9999</p></div>
                    </div>
                    <div className='row-checkbox' style={{ marginLeft: '-35px' }}>
                        <label className="container">Prefix: </label>
                        <div className='row-checkbox-input' style={{ marginLeft: '82px' }}> <p style={{ marginTop: '10px' }}>0001</p></div>

                    </div><div className='row-checkbox' style={{ marginLeft: '-35px' }}>
                        <label className="container">Reset mỗi ngày </label>
                    </div>
                    <p className='text-vd'> Ví dụ: 201-2001</p>


                </div>

                <div className="colum-table-infoservice ">
                    <div className="service-row">
                        <div className="service-trangthai ">
                            <p>Trạng thái</p>
                            <div className="box" onClick={() => show('tt', 'up1', 'down1')}>
                                <input id='iptt' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                                <button className='box-button' id='down1'>< TiArrowSortedDown /></button>
                                <button className='box-button' id='up1' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                            </div>

                        </div>
                        <div className="service-trangthai ">
                            <p>Chọn thời gian</p> <div className='ctg-row '>
                                <div className='daytime-picker-sc' onClick={OnClick} >
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
                                <form autoComplete="off" >
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
                                    <p style={{ color: " #35C75A", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Đã hoàn thành</p>
                                </div>
                            </div>
                            <div className="row-chung3">
                                <div className="div-center">
                                    <p style={{ color: " #5490EB", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Đang thực hiện</p>
                                </div>
                            </div>
                            <div className="row-chung2">
                                <div className="div-center">
                                    <p style={{ color: " #35C75A", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Đã hoàn thành</p>
                                </div>
                            </div>
                            <div className="row-chung3">
                                <div className="div-center">
                                    <p style={{ color: " #6C7585", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Vắng</p>
                                </div>
                            </div>
                            <div className="row-chung2">
                                <div className="div-center">
                                    <p style={{ color: " #35C75A", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Đã hoàn thành</p>
                                </div>
                            </div>
                            <div className="row-chung3">
                                <div className="div-center">
                                    <p style={{ color: " #5490EB", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Đang thực hiện</p>
                                </div>
                            </div>
                            <div className="row-chung2">
                                <div className="div-center">
                                    <p style={{ color: " #6C7585", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Vắng</p>
                                </div>
                            </div>
                            <div className="row-tt4">
                                <div className="div-center">
                                    <p style={{ color: " #35C75A", fontSize: '24px', margin: 'auto' }}>•</p>
                                    <p>Đã hoàn thành</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id='tt' className='select-drop-down' style={{ width: '154px', marginLeft: '10px', marginTop: '20px' }} onClick={() => show('tt', 'up1', 'down1')}>
                        <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('tc', 'iptt')}><label id='tc'>Tất cả</label></div>
                        <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('dc', 'iptt')}><label id='dc'>Đã hoàn thành</label></div>
                        <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('dsd', 'iptt')}><label id='dsd'>Đã thực hiện</label></div>
                        <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('bq', 'iptt')}><label id='bq'>Vắng</label></div>
                    </div>
                </div>

                <div className='daytime-picker-caledar-infoscv' id='cldsv'>
                    <Calendar locale='en' selectRange />
                </div>

                <div className='div-add' style={{ top: '172px' }} onClick={() => nav("/Service/UpdateService")}>
                    <div className='plus'><FaPen className='cong' /></div>
                    <div className='add'>
                        <p > Cập nhật</p>
                        <p >danh sách</p>
                    </div>
                </div>


                <div className='div-add' style={{ top: '267px', height: '75px' }} onClick={() => nav("/Service")}>
                    <div className='plus'><RiArrowGoBackLine className='cong' /></div>
                    <div className='add'>
                        <p > Quay lại</p>

                    </div>
                </div>

                <Nextpage />
                <Topbar nametitle1='Dịch vụ ﹥ ' nametitle2='Danh sách dịch vụ ﹥ ' nametitle3='Chi tiết' href='/Service' href2='' nametitle21='' />
                <Menubar buttonid="dv" />

            </div>
        </div >

    )
}

export default InfoService;