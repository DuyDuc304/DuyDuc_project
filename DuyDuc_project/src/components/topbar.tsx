import { BsFillBellFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type titlepros = {
    nametitle1?: string | undefined
    nametitle2: string | undefined
    href: string | '#'
    nametitle21: string | undefined
    href2: string | '#'
    nametitle3: string | undefined
}

export const Topbar = (props: titlepros) => {
    const navigate = useNavigate();
    const userInfo = useSelector((state: any) => state.User);
    var day = new Date();
    const handleNotice = () => {
        const bell: any = document.querySelector(".notice")
        const notice: any = document.querySelector(".notice-user")
        if (bell.classList.toggle("button-notice-active")) {
            notice.style.display = 'flex';
        } else {
            notice.style.display = 'none';
        }
    }

    return (
        <div className='topbar'>
            <div className="title" id="title">
                <label className="title1">{props.nametitle1}</label>
                <span onClick={() => navigate(props.href)}>{props.nametitle2}</span>
                <span onClick={() => navigate(props.href2)}>{props.nametitle21}</span>
                <label className="title3">{props.nametitle3}</label>
            </div>
            <div className='notice' id="ntc" onClick={() => handleNotice()}><BsFillBellFill className='bell' /></div>
            <div onClick={() => navigate('/Info')} >
                <div className='avata'>
                    <img src={userInfo.Avatar} alt="avata" />
                </div>
                <div className='name'>
                    <p>Xin chào</p>
                    <span id="nameuser">{userInfo.Name}</span>
                </div>
            </div>
            <div className="notice-user" id="usernotice" onClick={handleNotice} >
                <div className="notice-title"><p>Thông báo</p></div>
                <div className="notice-list" id="style-1" >
                    <ul >

                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>


                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>


                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>

                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>

                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>

                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>

                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>

                        <li className="notice-item" onClick={() => navigate("/NumberOrder/InfoNumberOrder")}>
                            <p className="notice-name-user"> Người dùng: Nguyễn Duy Đức</p>
                            <p className="notice-content-user">Thời gian nhận sô: {day.getHours()}h{day.getMinutes()} ngày {day.toLocaleDateString()}</p>
                            <p className="boder"></p>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}


