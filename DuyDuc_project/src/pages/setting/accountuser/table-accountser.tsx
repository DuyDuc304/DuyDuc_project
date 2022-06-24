
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './tableaccountuser.css'


export const TableAccountUser = () => {
    const nav = useNavigate()
    const AccountUser = useSelector((state: any) => state.AccountUser);
    function setStatus(status: boolean) {
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
    return (
        <div className='div-layout' id="tbacc" >
            <div className="row1">
                <div className="col1-accuser"><p className="colulm1-p">Tên đăng nhập</p></div>
                <div className="col2-accuser"><p className="colulm1-p">Họ tên</p></div>
                <div className="col3-accuser"><p className="colulm1-p">Số điện thoại</p></div>
                <div className="col4-accuser"><p className="colulm1-p">Email</p></div>
                <div className="col5-accuser"><p className="colulm1-p">Vai trò</p></div>
                <div className="col6-accuser"><p className="colulm1-p">Trạng thái hoạt động</p></div>
                <div className="col7-accuser"></div>
            </div>
            {AccountUser.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="col1-accuser"><p>{item.User}</p></div>
                    <div className="col2-accuser"><p>{item.NameUser}</p></div>
                    <div className="col3-accuser"><p>{item.Phone}</p></div>
                    <div className="col4-accuser"><p>{item.Email}</p></div>
                    <div className="col5-accuser"><p>{item.Role}</p></div>
                    <div className="col6-accuser">
                        {setStatus(item.Status)}
                    </div>
                    <div className="col7-accuser">
                        <span className="spanlink" onClick={() => nav('/AccountUser/UpdateAccountUser')} >Cập nhật</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableAccountUser;