import { BsFillBellFill } from "react-icons/bs";

type titlepros = {
    nametitle: string
}

export const Topbar = (props: titlepros) => {

    return (
        <div className='topbar'>
            <label id='title'>{props.nametitle}</label>
            <div className='notice'><BsFillBellFill className='bell' /></div>
            <a href='/info' >
                <div className='avata'>
                    <img src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt="avata" />
                </div>
                <div className='name'>
                    <p>Xin chào</p>
                    <span >Nguyễn Duy Đức</span>
                </div>
            </a>
        </div>
    );
}


