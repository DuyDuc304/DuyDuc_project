import small_logo from './images/small_logo.svg';
import { MdOutlineDashboard, MdDesktopWindows, MdOutlineForum, MdOutlinePoll, MdAutoAwesomeMotion, MdLogout, MdMoreVert } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";



export const Menubar = () => {
    return (
        <div className='menubar'>
            <div className='small-logo'>
                <a href="/Dashboad"><img src={small_logo} alt="logo" /></a>
            </div>
            <div className='option'>
                <div className='cot'>
                    <div className='btnmenubar'  >
                        <a href="/Dashboad" className='ab'> <MdOutlineDashboard className='icon' />  Dashboard</a>
                    </div>
                    <div className='btnmenubar'>
                        <a href="/Device" className='ab'> <MdDesktopWindows className='icon' />  Thiết bị</a>
                    </div>
                    <div className='btnmenubar'>
                        <a href="/Service" className='ab'> <MdOutlineForum className='icon' />  Dịch vụ</a>
                    </div>
                    <div className='btnmenubar'>
                        <a href="/NumberOrder" className='ab'><MdAutoAwesomeMotion className='icon' />  Cấp số</a >
                    </div>
                    <div className='btnmenubar'>
                        <a href="#" className='ab'> <MdOutlinePoll className='icon' />Báo cáo</a>
                    </div>
                    <div className='btnmenubar'>
                        <div className="dropdown">
                            <RiSettingsLine className='icon1' />  Cài đặt hệ thống   <MdMoreVert className='icon1' />
                            <div className="dropdown-content">
                                <a href="#">Quản lý vai trò</a>
                                <a href="#">Quản lý tài khoản</a>
                                <a href="#">Nhật ký người dùng</a>
                            </div>
                        </div >
                    </div>
                </div>



            </div>
            <div className='logout'>
                <a href="/login"> <MdLogout className='icon' />  Đăng xuất</a>
            </div>
        </div>
    );
}

