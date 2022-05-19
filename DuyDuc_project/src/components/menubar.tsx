import small_logo from './images/small_logo.svg';
import { MdOutlineDashboard, MdDesktopWindows, MdOutlineForum, MdOutlinePoll, MdLogout, MdMoreVert } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";


export const Menubar = () => {
    return (
        <div className='menubar'>
            <div className='small-logo'>
                <a href="/Dashboard"><img src={small_logo} alt="logo" /></a>
            </div>
            <div className='option'>
                <div className='cot'>
                    <div className='btnmenubar'  >
                        <a href="/Dashboard" className='ab'> <MdOutlineDashboard className='icon' />  <p>Dashboard</p></a>
                    </div>
                    <div className='btnmenubar'>
                        <a href="/Device" className='ab'> <MdDesktopWindows className='icon' />  <p>Thiết bị</p></a>
                    </div>
                    <div className='btnmenubar'>
                        <a href="/Service" className='ab'> <MdOutlineForum className='icon' />  <p>Dịch vụ</p></a>
                    </div>
                    <div className='btnmenubar'>
                        <a href="/NumberOrder" className='ab'><ImStack className='icon' />  <p>Cấp số</p></a >
                    </div>
                    <div className='btnmenubar'>
                        <a href="/Report" className='ab'> <MdOutlinePoll className='icon' /><p>Báo cáo</p></a>
                    </div>
                    <div className='btnmenubar'>
                        <div className="dropdown">
                            <RiSettingsLine className='icon1' /> <p> Cài đặt hệ thống</p>   <MdMoreVert className='icon1' />
                            <div className="dropdown-content">
                                <a href="/RoleUser">Quản lý vai trò</a>
                                <a href="/AccountUser">Quản lý tài khoản</a>
                                <a href="/DiaryUser">Nhật ký người dùng</a>
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

