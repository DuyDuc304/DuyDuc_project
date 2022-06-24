
import { useSelector } from "react-redux";
import './tablediary.css'


export const TableDiary = () => {
    const DiaryUser = useSelector((state: any) => state.DiaryUser);
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
        <div className='div-table-report' id="tbnk" >
            <div className='row1'>
                <div className="col1-diary"><p className="colulm1-p">Tên đăng nhập</p></div>
                <div className="col2-diary"><p className="colulm1-p">Thời gian tác động</p></div>
                <div className="col3-diary"><p className="colulm1-p">IP thực hiện</p></div>
                <div className="col14-diary"><p className="colulm1-p">Thao tác thực hiện</p></div>
            </div>
            {DiaryUser.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="col1-diary"><p>{item.User}</p></div>
                    <div className="col2-diary"><p>{item.Date} 15:12:17</p></div>
                    <div className="col3-diary"><p>{item.IP}</p></div>
                    <div className="col4-diary"><p>{item.Content}</p></div>
                </div>))}
        </div>
    )

}
export default TableDiary;