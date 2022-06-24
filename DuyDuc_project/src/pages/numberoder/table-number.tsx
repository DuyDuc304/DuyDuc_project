
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './tablenumber.css'

export const TableNumber = () => {
    const nav = useNavigate()
    const OrderNumber = useSelector((state: any) => state.OrderNumber);

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
    function setStatus(status: string) {
        if (status === "dc") {
            return (
                <div className="div-center">
                    <p style={{ color: " #4277FF", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Đang chờ</p>
                </div>
            )
        } if (status === "bq") {
            return (
                <div className="div-center">
                    <p style={{ color: " #E73F3F", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Bỏ qua</p>
                </div>
            )
        }
        else {
            return (
                <div className="div-center">
                    <p style={{ color: " #6C7585", fontSize: '24px', margin: 'auto' }}>•</p>
                    <p>Đã sử dụng</p>
                </div>
            )
        }
    }
    return (
        <div className='div-layout' id="tbno" >
            <div className='row1'>
                <div className="col-num1"><p className="colulm1-p">STT</p></div>
                <div className="col-num2"><p className="colulm1-p">Tên khách hàng</p></div>
                <div className="col-num3"><p className="colulm1-p">Tên dịch vụ</p></div>
                <div className="col-num4"><p className="colulm1-p">Thời gian cấp</p></div>
                <div className="col-num5"><p className="colulm1-p">Hạn sử dụng</p></div>
                <div className="col-num6"><p className="colulm1-p">Trạng thái </p></div>
                <div className="col-num7"><p className="colulm1-p">Nguồn cấp</p></div>
                <div className="col-num8"></div>
            </div>
            {OrderNumber.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="col-num1"><p >{item.STT}</p></div>
                    <div className="col-num2"><p >{item.NameUser}</p></div>
                    <div className="col-num3"><p >{item.NameService}</p></div>
                    <div className="col-num4"><p>14:35-{item.Date}</p></div>
                    <div className="col-num5"><p >14:35-{item.DateEnd}</p></div>
                    <div className="col-num6">
                        {setStatus(item.Status)}
                    </div>
                    <div className="col-num7"><p >{item.Source}</p></div>
                    <div className="col-num8">
                        <span className="spanlink" onClick={() => nav('/NumberOrder/InfoNumberOrder')} >Chi tiết</span>
                    </div>
                </div>
            ))}
        </div>
    )

}
export default TableNumber;