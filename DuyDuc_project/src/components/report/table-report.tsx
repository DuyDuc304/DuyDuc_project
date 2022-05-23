import React from "react";
import './tablereport.css'

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
            <div className='div-layout' >
                <div className='row1'> </div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row2'></div>
                <div className='row3'></div>
                <div className='row4'></div>

            </div>
        )
    }
}
export default TableReport;