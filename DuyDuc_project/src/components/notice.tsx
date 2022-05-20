import { render } from "@testing-library/react";
import React from "react";


import { BsFillBellFill } from "react-icons/bs";



export const Notice = () => {

    const myFunction = (id: string) => {
        const btn: any = document.getElementById(id)
        btn.classList.toggle("button-notice-active");

    }
    const handleNotice = () => {
        const btn: any = document.querySelector(".notice")
        const notice: any = document.querySelector(".notice-user")
        if (btn.classList.toggle("button-notice-active")) {
            notice.style.display = 'block';
        } else {
            notice.style.display = 'none';
        }

    }

    return (
        <div className='topbar'>
            <label id='title'></label>
            <div className='notice' id='ntc' onClick={() => handleNotice()} ><BsFillBellFill className='bell' /></div>
            <a href='/info' >
                <div className='avata'>
                    <img src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt="avata" />
                </div>
                <div className='name'>
                    <p>Xin chào</p>
                    <span >Nguyễn Duy Đức</span>
                </div>
            </a>
            <div className="notice-user" id="usernotice" >
                <div className="notice-title"><p>Thông báo</p></div>
                <div className="notice-list" id="style-1" >
                    <ul >
                        <li className="notice-item">
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            <hr />
                        </li>
                        <li className="notice-item">
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            <hr />
                        </li>
                        <li className="notice-item">
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            <hr />
                        </li>
                        <li className="notice-item">
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            <hr />
                        </li>
                        <li className="notice-item">
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            <hr />
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    );
}


export default Notice;
