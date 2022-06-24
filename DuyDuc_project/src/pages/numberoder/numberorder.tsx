import React, { useState } from 'react';
import { Topbar } from '../../components/topbar';
import { Menubar } from '../../components/menu/menubar';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import TableNumber from './table-number';
import Nextpage from '../../components/nextpage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

let newDate = new Date()


const NumberOrder = () => {
    var [date, setdate] = useState(newDate)
    const nav = useNavigate()
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
    function OnClick() {
        const cld: any = document.querySelector('.daytime-picker-caledar-qlcs')
        if (cld.style.display === "none") {
            cld.style.display = "block";
        } else {
            cld.style.display = 'none';
        }


    }

    return (
        <div className='bg'>
            <div className="Backgroundapp">
                <TableNumber />

                <div className='div-add' onClick={() => nav("/NumberOrder/AddNumber")}>
                    <div className='plus'><AiOutlinePlus className='cong' /></div>
                    <div className='add'>
                        <p > Cấp </p>
                        <p >số mới</p>
                    </div>
                </div>

                <div className='qlcs'>
                    <div className='qlcs-tdv'>
                        <p>Tên dịch vụ</p>
                        <div className="box" onClick={() => show('tdv', 'up', 'down')} >
                            <input readOnly id='ip' value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button className='box-button' id='down'><TiArrowSortedDown /></button>
                            <button className='box-button' id='up' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='tdv' className='select-drop-down' style={{ width: '154px' }} onClick={() => show('tdv', 'up', 'down')}>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('ps', 'ip')}><label id='ps'>Phụ khoa</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('tq', 'ip')}><label id='tq'>Tổng quát</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('rhm', 'ip')}><label id='rhm'>Răng hàm mặt</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('tm', 'ip')}><label id='tm'>Tim mạch</label></div>
                        </div>
                    </div>
                    <div className='qlcs-tdv'>
                        <p>Tình trạng</p>
                        <div className="box" onClick={() => show('tt', 'up1', 'down1')}>
                            <input id='iptt' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button className='box-button' id='down1'><TiArrowSortedDown /></button>
                            <button className='box-button' id='up1' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='tt' className='select-drop-down' style={{ width: '154px', marginLeft: '175px' }} onClick={() => show('tt', 'up1', 'down1')}>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('tc', 'iptt')}><label id='tc'>Tất cả</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('dc', 'iptt')}><label id='dc'>Đang chờ</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('dsd', 'iptt')}><label id='dsd'>Đã sử dụng</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('bq', 'iptt')}><label id='bq'>Bỏ qua</label></div>
                        </div>

                    </div>
                    <div className='qlcs-tdv'>
                        <p>Nguồn cấp</p>
                        <div className="box" onClick={() => show('nc', 'up2', 'down2')}>
                            <input id='ipnc' readOnly value={'Tất cả'} style={{ marginLeft: '4px', fontSize: '16px', cursor: 'pointer' }}></input>
                            <button className='box-button' id='down2'><TiArrowSortedDown /></button>
                            <button className='box-button' id='up2' style={{ display: 'none' }}><TiArrowSortedUp /></button>
                        </div>
                        <div id='nc' className='select-drop-down' style={{ width: '154px', marginLeft: '345px' }} onClick={() => show('nc', 'up2', 'down2')}>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('tc', 'ipnc')}><label id='tc'>Tất cả</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('kiosk', 'ipnc')}><label id='kiosk'>Kiosk</label></div>
                            <div className='select-drop-down-item ' style={{ width: '154px' }} onClick={() => Chose('ht', 'ipnc')}><label id='ht'>Hệ thống</label></div>

                        </div>
                    </div>
                    <div className='qlcs-tdv'>
                        <p>Chọn thời gian</p>
                        <div className='ctg-row '>
                            <div className='daytime-picker-qlcs' onClick={OnClick} >
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p>{date.toLocaleDateString()}</p>
                            </div>
                            <p style={{ color: '#535261', margin: '10px', display: 'flex' }} >▸</p>
                            <div className='daytime-picker-qlcs' >
                                <FaRegCalendarAlt className='icon-calendar' />
                                <p>{newDate.toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className='qlcs-tdv'>
                        <p >Từ khóa</p>
                        <div className='sreach-qlcs' >
                            <form autoComplete="off"  >
                                <input type="text" name='timkiem' placeholder="Nhập từ khóa ..." style={{ fontSize: '14px' }} ></input>
                                <button className="sreach-sv-button" type='submit'><AiOutlineSearch /></button>
                            </form>

                        </div>
                    </div>

                </div>

                <div className='daytime-picker-caledar-qlcs' id='cldsv'>
                    <Calendar value={date} onChange={setdate} locale='en' />
                </div>


                <div className='title-report-type'>Quản lý cấp số</div>
                <Nextpage />
                <Topbar nametitle1='Cấp số ﹥' nametitle2='' nametitle3='Danh sách cấp số' href='' href2='' nametitle21='' />
                <Menubar buttonid="cs" />

            </div>
        </div>
    );

}




export default NumberOrder;


