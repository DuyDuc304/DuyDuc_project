import { BsFillBellFill } from "react-icons/bs";

type titlepros = {
    nametitle1?: string | undefined
    nametitle2: string | undefined
    href: string | undefined
    nametitle21: string | undefined
    href2: string | undefined
    nametitle3: string | undefined
}

export const Topbar = (props: titlepros) => {

    const handleNotice = () => {
        const btn: any = document.querySelector(".notice")
        const notice: any = document.querySelector(".notice-user")
        if (btn.classList.toggle("button-notice-active")) {
            notice.style.display = 'flex';
        } else {
            notice.style.display = 'none';
        }


    }
    return (
        <div className='topbar'>
            <div className="title">
                <label className="title1">{props.nametitle1}</label>
                <a href={props.href}>{props.nametitle2}</a>
                <a href={props.href2}>{props.nametitle21}</a>
                <label className="title3">{props.nametitle3}</label>
            </div>
            <div className='notice' id="ntc" onClick={() => handleNotice()}><BsFillBellFill className='bell' /></div>
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
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                        <a href="#" className="notline">
                            <li className="notice-item">
                                <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                                <p className="notice-content-user">Thời gian nhận sô: 12h ngày 18/05/2022</p>
                            </li>
                        </a>
                    </ul>

                </div>
            </div>
        </div>
    );
}


