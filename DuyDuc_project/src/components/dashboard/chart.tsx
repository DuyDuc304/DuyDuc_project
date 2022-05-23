
import { FC, useState } from 'react';
import ApexChartss from 'apexcharts';


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
        changechart(newType);
        daytime(currentType)
    }
    const datathang = {
        labels: ["1", "2", "3", "4", "5", "6", "7", '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: "Số người sử dụng trong tháng",
                data: [3300, 5300, 8500, 4100, 4400, 6500, 4000, 6000, 4000, 7500, 4000, 4000],
                fill: true,
                backgroundColor: 'rgba(206, 221, 255, 0.5)',
                tension: 0.3,
                borderColor: " #5185F7",
            },
        ],


    };
    const datatuan = {
        labels: ["tuần 1", "tuần 2", "tuần 3", "tuần4"],
        datasets: [
            {
                label: "Số người sử dụng trong tuần",
                data: [3300, 3600, 3500, 4100],
                fill: true,
                backgroundColor: 'rgba(206, 221, 255, 0.5)',
                tension: 0.3,
                borderColor: " #5185F7",
            },
        ],

    };





    const daytime = (a: string) => {

        if (a === 'tuần') {
            setday = 'Tuần ' + date + "/" + month + "/" + year;

        }
        if (a === 'ngày') {
            setday = 'Ngày ' + date + "/" + month + "/" + year;
        }
        if (a === 'tháng') {
            setday = 'Tháng ' + month + '/' + year;
        }
        return setday;

    }
    const changechart = (b: string) => {
        const Elmngay: any = document.getElementById('ngay')
        const Elmthang: any = document.getElementById('thang')
        const Elmtuan: any = document.getElementById("tuan")
        if (b === 'tuần') {

            Elmngay.style.display = 'none';
            Elmthang.style.display = 'none'
            Elmtuan.style.display = 'block';
        }
        if (b === 'ngày') {

            Elmngay.style.display = 'block';
            Elmtuan.style.display = 'none';
            Elmthang.style.display = 'none'
        }
        if (b === 'tháng') {

            Elmngay.style.display = 'none';
            Elmtuan.style.display = 'none';
            Elmthang.style.display = 'block';
        }

    };
    const

        display: boolean = false;


    return (
        <div className='chart'>
            <span className='title-chart'>Bảng thống kê theo {currentType} </span>
            <p >{daytime(currentType)}</p>
            <div className='select-type-row'>
                <span>Xem thêm</span>
                <form  >
                    <select className='select-type' onChange={(event) => changetype(event.target.value)} value={currentType} >
                        <option value="ngày">Ngày</option>
                        <option value="tuần">Tuần</option>
                        <option value="tháng">Tháng</option>
                    </select>
                </form>
            </div>
            <div className='chart-line' id='ngay' style={{ display: "block" }} >

            </div>



            <div className='chart-line' id='tuan' style={{ display: "none" }}  >


            </div>
            <div className='chart-line' id='thang' style={{ display: "none" }}  >



            </div>


        </div>
    )
}




export default Chart;

function props(props: any) {
    throw new Error('Function not implemented.');
}
//  <img src={ChartImg} alt="chart" />
