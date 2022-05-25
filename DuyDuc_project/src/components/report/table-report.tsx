import React from "react";
import './tablereport.css'
import { TiArrowUnsorted } from "react-icons/ti";

class TableReport extends React.Component {
    showmore(id: string) {

        const btn: any = document.getElementById(id)
        if (btn.style.display == 'none')
            btn.style.display = 'flex';

        document.addEventListener("mousedown", (event) => {
            btn.style.display = 'none';
        })

    }

    render() {
        return (
            <div className='div-table-report' >
                <div className='row1'>
                    <div className="col1-report">
                        <div className="row-title-report">
                            <p className="col1-report-p">Số thứ tự</p>
                            <TiArrowUnsorted className="icon-updown-report" />
                        </div>
                    </div>
                    <div className="col2-report"></div>
                    <div className="col3-report"></div>
                    <div className="col4-report"></div>
                    <div className="col5-report"></div>
                </div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row-end-report'></div>

            </div>
        )
    }
}
export default TableReport;