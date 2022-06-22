import React, { useEffect, useState } from "react";
import './tableservice.css'

export const TableService = () => {
    const [data, setdata] = useState([])
    //call api bằng json server
    useEffect(() => {
        var constAPI = ' http://localhost:3000/Service'
        const fetchItem = async () => {
            const result = await fetch(constAPI).then(function (response) {
                return response.json()
            })
            setdata(result)
        }
        fetchItem()
    }, [])
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
    return (
        <div className='div-layout' id="tbdv" >
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
            {data.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="colum1-service">
                        <p >{item.IDService}</p>
                    </div>
                    <div className="colum2-service">
                        <p >{item.NameService}</p>
                    </div>
                    <div className="colum3-service">
                        <p >{item.Describe}</p>
                    </div>
                    <div className="colum4-service">
                        {setStatusUse(item.StatusUse)}
                    </div>
                    <div className="colum5-service">
                        <a href="/Service/InfoService">Chi tiết</a>
                    </div>
                    <div className="colum6-service">
                        <a href="/Service/UpdateService"> Cập nhật</a>
                    </div>
                </div>
            ))}

        </div>
    )

}
export default TableService;