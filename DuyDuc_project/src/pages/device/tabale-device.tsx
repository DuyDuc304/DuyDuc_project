import React, { useEffect, useState } from "react";
import './tabledevice.css'

export const TableDevice = () => {
    const [data, setdata] = useState([])
    //call api bằng json server
    useEffect(() => {
        var constAPI = ' http://localhost:3000/Device'
        const fetchItem = async () => {
            const result = await fetch(constAPI).then(function (response) {
                return response.json()
            })
            setdata(result)
        }
        fetchItem()
    }, [])
    function showmore(id: number) {
        const btn: any = document.getElementById(id.toString())
        if (btn.style.display === 'none')
            btn.style.display = 'flex';

        document.addEventListener("mousedown", (event) => {
            btn.style.display = 'none';
        })

    }
    function setcolor(id: number) {
        if ((id + 1) % 9 === 0) {
            return 'row4'
        }
        if (id % 2 === 0) {
            return 'row2'
        } else {
            return 'row3'
        }

    }

    function setStatusUse(status: boolean) {
        if (status) {
            return (
                <div className="div-center">
                    <p style={{ color: " #34CD26", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Hoạt động</p>
                </div>
            )
        } else {
            return (
                <div className="div-center">
                    <p style={{ color: " #EC3740", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Ngừng hoạt động</p>
                </div>
            )
        }
    }
    function setStatusConnect(status: boolean) {
        if (status) {
            return (
                <div className="div-center">
                    <p style={{ color: " #34CD26", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Kết nối</p>
                </div>
            )
        } else {
            return (
                <div className="div-center">
                    <p style={{ color: " #EC3740", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Mất kết nối</p>
                </div>
            )
        }
    }
    return (
        <div className='div-layout' id="tbtb">
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
            {data.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="colum1">
                        <p>{item.IDDevice}</p>
                    </div>
                    <div className="colum2">
                        <p>{item.NameDevice}</p>
                    </div>
                    <div className="colum3">
                        <p>{item.IP}</p>
                    </div>
                    <div className="colum4">
                        {setStatusUse(item.StatusUse)}
                    </div>
                    <div className="colum5">
                        {setStatusConnect(item.StatusConnect)}
                    </div>
                    <div className="colum6">
                        <p>Khám tim mạch, Khám mắt,....</p>
                        <label onClick={() => showmore(item.id)}>Xem thêm</label>
                        <div className="div-more" id={item.id}>{item.ServiceUse}</div>
                    </div>

                    <div className="colum7">
                        <a href="/Device/InfoDevice">Chi tiết</a>
                    </div>
                    <div className="colum8">
                        <a href="/Device/UpdateDevice"> Cập nhật</a>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default TableDevice;