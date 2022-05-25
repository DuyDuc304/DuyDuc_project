import React from 'react';
import { IoMdClose } from 'react-icons/io';
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
    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='addnewnum'>
                        <div className='addnewnum-col'>

                            <p className='addnewnum-title'>Cấp số mới </p>
                            <p className='addnewnum-cdv'>Dịch vụ khách hàng lựa chọn</p>
                            <form onSubmit={this.popup} >
                                <select className='addnewnum-select-dv' name='TenDichVu' >
                                    <option value="">Chọn dịch vụ</option>
                                    <option value="khamTongQuan">Khám tổng quát</option>
                                    <option value="KhamPhuSan">Khám phụ sản khoa</option>
                                    <option value="KhamRangHamMat">Khám răng hàm mặt</option>
                                </select>
                                <div className='rowbtn' >
                                    <a href="/login" className='button-huy' style={{ width: '115px' }} > Hủy bỏ</a>
                                    <button className='myform-button ' type='submit' onClick={this.popup} style={{ width: '115px' }}>In số</button>
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
