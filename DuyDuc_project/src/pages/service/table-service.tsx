
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './tableservice.css'

export const TableService = () => {
    const nav = useNavigate()
    const Service = useSelector((state: any) => state.Service);

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
            {Service.map((item: any, index: any) => (
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
                        <span className="spanlink" onClick={() => nav("/Service/InfoService")}>Chi tiết</span>
                    </div>
                    <div className="colum6-service">
                        <span className="spanlink" onClick={() => nav("/Service/UpdateService")}>Cập nhật</span>

                    </div>
                </div>
            ))}

        </div>
    )

}
export default TableService;