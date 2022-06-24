import small_logo from '../../assets/images/small_logo.svg';
import { MdOutlineDashboard, MdDesktopWindows, MdLogout, MdMoreVert } from "react-icons/md";
import { RiFileChartLine, RiSettingsLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import { GoCommentDiscussion } from "react-icons/go";
import './menu.css';
import { useNavigate } from 'react-router-dom';
type idbuton = {
    buttonid: string
}

export const Menubar = (id: idbuton) => {
    const navigate = useNavigate();
    var idbtn: string = id.buttonid;
    const changebutton = (id: string) => {
        if (id != null) {
            const btn: any = document.getElementById(id);
            btn.classList.toggle("button-active");
            if (id === "nknd") {
                const btn1: any = document.getElementById("nknd");
                btn1.classList.toggle("button-nknd");
                const btnst: any = document.getElementById('cd')
                btnst.classList.toggle('button-cd')
            }
            if (id === "qlvt") {
                const btn2: any = document.getElementById("qlvt");
                btn2.classList.toggle("button-qlvt");
                const btnst: any = document.getElementById('cd')
                btnst.classList.toggle('button-cd')
            }
            if (id === "qltk") {
                const btn3: any = document.getElementById("qltk");
                btn3.classList.toggle("button-qltk");
                const btnst: any = document.getElementById('cd')
                btnst.classList.toggle('button-cd')
            }
        }
    }

    return (
        <div className='menubar' onLoad={() => changebutton(idbtn)}>
            <div className='small-logo'>
                <div onClick={() => navigate('/Dashboard')}><img src={small_logo} alt="logo" /></div>
            </div>
            <div className='option'>
                <div className='cot'>
                    <div className='btnmenubar' id='db'>
                        <div onClick={() => navigate('/Dashboard')} className='ab' > <MdOutlineDashboard className='icon' />  <p>Dashboard</p></div>
                    </div>
                    <div className='btnmenubar' id='tb'>
                        <div onClick={() => navigate('/Device')} className='ab' > <MdDesktopWindows className='icon' />  <p>Thiết bị</p></div>
                    </div>
                    <div className='btnmenubar' id='dv'>
                        <div onClick={() => navigate('/Service')} className='ab' > <GoCommentDiscussion className='icon' />  <p>Dịch vụ</p></div>
                    </div>
                    <div className='btnmenubar' id='cs'>
                        <div onClick={() => navigate('/NumberOrder')} className='ab'><ImStack className='icon' />  <p>Cấp số</p></div>
                    </div>
                    <div className='btnmenubar' id='bc'>
                        <div onClick={() => navigate('/Report')} className='ab'> <RiFileChartLine className='icon' /><p>Báo cáo</p></div>
                    </div>
                    <div className='btnmenubar' >
                        <div className="dropdown" id='cd'>
                            <RiSettingsLine className='icon1' /> <p> Cài đặt hệ thống</p>   <MdMoreVert className='icon1' />
                            <div className="dropdown-content">
                                <div className='dropdown-content-div'><div className='dropdown-content-div-a' onClick={() => navigate('/RoleUser')} id='qlvt'><p>Quản lý vai trò</p></div></div>
                                <div className='dropdown-content-div'><div className='dropdown-content-div-a' onClick={() => navigate('/AccountUser')} id='qltk'><p>Quản lý tài khoản</p></div></div>
                                <div className='dropdown-content-div'><div className='dropdown-content-div-a' onClick={() => navigate('/DiaryUser')} id='nknd'><p>Nhật ký người dùng</p></div></div>
                            </div>
                        </div >
                    </div>

                </div>



            </div>
            <div id='a'></div>
            <div className='logout'>
                <a href="/Login"> <MdLogout className='icon' /> <p> Đăng xuất</p></a>
            </div>
        </div>
    );


}

