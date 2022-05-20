import small_logo from './small_logo.svg';
import { MdOutlineDashboard, MdDesktopWindows, MdOutlineForum, MdOutlinePoll, MdLogout, MdMoreVert } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";

type idbuton = {
    buttonid: string
}

export const Menubar = (id: idbuton) => {
    var idbtn: string = id.buttonid;
    const changebutton = (id: string) => {
        const btn: any = document.getElementById(id);
        btn.classList.toggle("button-active");
    }

    return (
        <div className='menubar' onLoad={() => changebutton(idbtn)}>
            <div className='small-logo'>
                <a href="/Dashboard"><img src={small_logo} alt="logo" /></a>
            </div>
            <div className='option'>
                <div className='cot'>
                    <div className='btnmenubar' id='db'>
                        <a href="/Dashboard" className='ab' > <MdOutlineDashboard className='icon' />  <p>Dashboard</p></a>
                    </div>
                    <div className='btnmenubar' id='tb'>
                        <a href="/Device" className='ab' > <MdDesktopWindows className='icon' />  <p>Thiết bị</p></a>
                    </div>
                    <div className='btnmenubar' id='dv'>
                        <a href="/Service" className='ab' > <MdOutlineForum className='icon' />  <p>Dịch vụ</p></a>
                    </div>
                    <div className='btnmenubar' id='cs'>
                        <a href="/NumberOrder" className='ab'><ImStack className='icon' />  <p>Cấp số</p></a >
                    </div>
                    <div className='btnmenubar' id='bc'>
                        <a href="/Report" className='ab'> <MdOutlinePoll className='icon' /><p>Báo cáo</p></a>
                    </div>
                    <div className='btnmenubar'>
                        <div className="dropdown">
                            <RiSettingsLine className='icon1' /> <p> Cài đặt hệ thống</p>   <MdMoreVert className='icon1' />
                            <div className="dropdown-content">
                                <a href="/RoleUser" id='qlvt'><p>Quản lý vai trò</p></a>
                                <a href="/AccountUser" id='qltk'><p>Quản lý tài khoản</p></a>
                                <a href="/DiaryUser" id='nknd'><p>Nhật ký người dùng</p></a>
                            </div>
                        </div >
                    </div>
                </div>



            </div>
            <div className='logout'>
                <a href="/login"> <MdLogout className='icon' /> <p> Đăng xuất</p></a>
            </div>
        </div>
    );


}

