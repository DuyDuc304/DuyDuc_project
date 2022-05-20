
import ChartImg from './chart.svg';




import React, { FC, useState } from 'react'

type FruitProps = {
    defaulchart: string;
}
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
export const Chart: FC<FruitProps> = ({ defaulchart }) => {
    const [currentType, setCurrentType] = useState(defaulchart)
    var setday: string
    const changetype = (newType: string): void => {
        setCurrentType(newType)
        daytime(currentType)
    }

    const daytime = (a: string) => {
        if (a === 'năm') {
            setday = 'năm ' + year
        } else
            if (a === 'ngày') {
                setday = 'ngày ' + date + "/" + month + "/" + year
            } else
                if (a === 'tháng') {
                    setday = 'tháng ' + month + '/' + year
                }
        return setday;

    }
    return (
        <div className='chart'>
            <span className='title-chart'>Bảng thống kê theo {currentType} </span>
            <p >{daytime(currentType)}</p>
            <div className='select-type-row'>
                <span>Xem thêm</span>
                <form  >
                    <select className='select-type' onChange={(event) => changetype(event.target.value)} value={currentType}>
                        <option value="ngày">Ngày</option>
                        <option value="tháng">Tháng</option>
                        <option value="năm">Năm</option>
                    </select>
                </form>
            </div>
            <img src={ChartImg} alt="chart" />
        </div>
    )
}




export default Chart;
{/* <img src={ChartImg} alt="chart" />
class Chart extends React.Component  */}