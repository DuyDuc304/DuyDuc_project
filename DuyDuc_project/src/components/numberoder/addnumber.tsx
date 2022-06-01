import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import { Menubar } from '../layout/menubar';
import { Topbar } from '../layout/topbar';


class AddNumber extends React.Component<any, any> {
    popup(e: React.SyntheticEvent) {
        e.preventDefault()

        const modal: any = document.querySelector('.popup')
        if (modal.style.display === "none") {
            modal.style.display = "block";
        }
        document.addEventListener("mousedown", (event) => {
            modal.style.display = 'none';
        })
    }
    Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    show = (id: string, u: string, d: string) => {
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
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">

                    <div className='addnewnum'>

                        <div className='addnewnum-col'>

                            <p className='addnewnum-title'>Cấp số mới </p>
                            <p className='addnewnum-cdv'>Dịch vụ khách hàng lựa chọn</p>
                            <form autoComplete='off' onSubmit={this.popup} >

                                <div className="sreach" style={{ width: '400px', marginBottom: '80px' }} onClick={() => this.show('tdv', 'up', 'down')} >
                                    <input name='TenDichVu' id='ip' disabled placeholder={'Chọn dịch vụ'} style={{ fontSize: '16px', width: '350px', cursor: 'pointer' }}></input>
                                    <label className='box-button' id='down'><TiArrowSortedDown /></label>
                                    <label className='box-button' id='up' style={{ display: 'none' }}><TiArrowSortedUp /></label>
                                </div>

                                <div className='rowbtn' >
                                    <a href="/NumberOrder" className='button-huy' style={{ width: '115px' }} > Hủy bỏ</a>
                                    <button className='myform-button ' type='submit' onClick={this.popup} style={{ width: '115px' }}>In số</button>
                                </div>
                                <div id='tdv' className='select-drop-down' onClick={() => this.show('tdv', 'up', 'down')} style={{ width: '400px', marginTop: '108px', marginLeft: '0px' }}>
                                    <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => this.Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                                    <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => this.Chose('ps', 'ip')}><label id='ps'>Phụ sản</label></div>
                                    <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => this.Chose('tq', 'ip')}><label id='tq'>Tổng quát</label></div>
                                    <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => this.Chose('rhm', 'ip')}><label id='rhm'>Răng hàm mặt</label></div>
                                    <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => this.Chose('tm', 'ip')}><label id='tm'>Tim mạch</label></div>
                                </div>
                            </form>

                        </div>

                    </div>
                    <div className="popup">
                        <div className="popup-content">
                            <div className="popup-content-info">
                                <div className="close-popup"><IoMdClose className='icon-close-popup' /></div>
                                <p className="popup-content-info-sttdc">Số thứ tự được cấp</p>
                                <p className="popup-content-info-num">2001201</p>
                                <p className="popup-content-info-dvsd">DV: Khám răng hàm mặt (tại quầy số 1 )</p>

                            </div>
                            <div className="popup-content-time">
                                <div className="div-center">
                                    <p>Thời gian cấp:</p><p> 09:30 11/10/2021</p>
                                </div>
                                <div className="div-center">
                                    <p>Hạn sử dụng:</p><p> 09:30 11/10/2021</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='title-report-type'>Quản lý cấp số</div>
                    <Topbar nametitle1='Cấp số ﹥ ' nametitle2='Danh sách cấp số ﹥ ' nametitle3='Thêm số mới' href='/NumberOrder' href2='' nametitle21='' />
                    <Menubar buttonid="cs" />

                </div>
            </div>
        );
    }
}
export default AddNumber;
