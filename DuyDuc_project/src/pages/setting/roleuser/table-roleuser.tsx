import React, { useEffect, useState } from "react";
import './table-roleuser.css'


export const TableRoleUser = () => {
    const [data, setdata] = useState([])
    //call api bằng json server
    useEffect(() => {
        var constAPI = 'http://localhost:3000/Role'
        const fetchItem = async () => {
            const result = await fetch(constAPI).then(function (response) {
                return response.json()
            })
            setdata(result)
        }
        fetchItem()
    }, [])
    function setcolor(id: number) {
        if ((id + 1) % 10 === 0) {
            return 'row-end-report'
        }
        if (id % 2 === 0) {
            return 'row2'
        } else {
            return 'row3'
        }
    }


    return (
        <div className='div-table-report' id="tbvt" >
            <div className='row1'>
                <div className="col1-roleuser"> <p className="colulm1-p">Tên vai trò</p></div>
                <div className="col2-roleuser"> <p className="colulm1-p"> Số người dùng</p></div>
                <div className="col3-roleuser"> <p className="colulm1-p">Mô tả</p></div>
                <div className="col4-roleuser"> </div>
            </div>
            {data.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="col1-roleuser"><p>{item.NameRole}</p> </div>
                    <div className="col2-roleuser"><p>{item.Quantity}</p> </div>
                    <div className="col3-roleuser"> <p>{item.Describe}</p></div>
                    <div className="col4-roleuser"><a href="/RoleUser/UpdateRoleUser">Cập nhật</a> </div>
                </div>))}
        </div>
    )

}
export default TableRoleUser;