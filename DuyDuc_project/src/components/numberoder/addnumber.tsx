import React, { useState } from 'react';
import { Menubar } from '../layout/menubar';
import { Topbar } from '../layout/topbar';


class AddNumber extends React.Component<any, any> {

    render() {
        return (
            <div className='bg'>
                <div className="Backgroundapp">
                    <div className='addnewnum'>
                        <div className='addnewnum-col'>

                            <p className='addnewnum-title'>Cấp số mới </p>
                            <p className='addnewnum-cdv'>Dịch vụ khách hàng lựa chọn</p><form >
                                <select className='addnewnum-select-dv' name='TenDichVu' >
                                    <option value="">Chọn dịch vụ</option>
                                    <option value="khamTongQuan">Khám tổng quát</option>
                                    <option value="KhamPhuSan">Khám phụ sản khoa</option>
                                    <option value="KhamRangHamMat">Khám răng hàm mặt</option>
                                </select>
                                <div className='rowbtn' >
                                    <a href="/login" className='button-huy' style={{ width: '115px' }} > Hủy bỏ</a>
                                    <button className='myform-button ' type='submit' style={{ width: '115px' }}>In số</button>
                                </div>
                            </form>
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
