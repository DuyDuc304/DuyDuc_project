import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Menubar } from "../../../components/menu/menubar";
import { Topbar } from "../../../components/topbar";

const AddAccountUser = () => {
    const nav = useNavigate()
    function Chose(id: string, input: string) {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    function show(id: string, u: string, d: string) {
        const ip: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (ip.style.display === 'none') {
            ip.style.display = 'block';
            up.style.display = 'flex';
            down.style.display = 'none';
        } else {
            ip.style.display = 'none';
            down.style.display = 'flex';
            up.style.display = 'none';
        }
    }
    function showpw() {
        const show: any = document.getElementById('show')
        const hide: any = document.getElementById('hide')
        const eye: any = document.getElementById('pw')
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
            show.style.display = 'block';
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'block';
            show.style.display = 'none';
        }
    }
    function showpw1() {
        const show: any = document.getElementById('show1')
        const hide: any = document.getElementById('hide1')
        const eye: any = document.getElementById('pw1')
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
            show.style.display = 'block';
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'block';
            show.style.display = 'none';
        }
    }

    return (
        <div className='bg'>
            <div className="Backgroundapp">
                <form autoComplete="off">
                    <div className='add-device'>
                        <p className='text-tttb'>Th??ng tin t??i kho???n</p>

                        <div className='row-update-device'>
                            <div className='col-update-device'>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>H??? t??n:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input type="text" name='HoTen' placeholder="Nh???p h??? v?? t??n"></input>
                                </div>

                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>S??? ??i???n tho???i:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input type="text" name='SoDienThoai' placeholder="Nh???p s??? ??i???n tho???i"></input>
                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Email:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input type="email" name='Email' placeholder="Nh???p email"></input>
                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Vai tr??:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <div className='box' style={{ width: '540px' }}>
                                        <input readOnly name='VaiTro' onClick={() => show('tdv', 'up', 'down')} id='ip' placeholder='Ch???n vai tr??' style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                        <label className='box-button' onClick={() => show('tdv', 'up', 'down')} style={{ marginLeft: '500px', position: 'absolute' }} id='down'><TiArrowSortedDown /></label>
                                        <label className='box-button' onClick={() => show('tdv', 'up', 'down')} style={{ marginLeft: '500px', position: 'absolute', display: 'none' }} id='up' ><TiArrowSortedUp /></label>
                                    </div>
                                    <div id='tdv' className='select-drop-down' onClick={() => show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '24px', marginTop: '348px' }}>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('kt', 'ip')}><label id='kt'>K??? to??n</label></div>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('ql', 'ip')}><label id='ql'>Qu???n l??</label></div>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('ad', 'ip')}><label id='ad'>Admin</label></div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-update-device'>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>T??n ????ng nh???p:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input type="text" name='TenDangNhap' placeholder="Nh???p t??n ????ng nh???p"></input>

                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>M???t kh???u:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input className='row-password-input' type="password" id="pw" name='password' placeholder="Nh???p m???t kh???u" ></input>
                                    <label style={{ fontSize: '18px' }} className='input-have-eye-account' onClick={showpw} id='eye'> <FiEyeOff className='icon-eye' id='show' /> <FiEye className='icon-eye' id='hide' style={{ display: 'none' }} /></label>
                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>Nh???p l???i m???t kh???u:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <input className='row-password-input' type="password" id="pw1" name='password2' placeholder="Nh???p l???i m???t kh???u" ></input>
                                    <label style={{ fontSize: '18px' }} className='input-have-eye-account' onClick={showpw1} id='eye'> <FiEyeOff className='icon-eye' id='show1' /> <FiEye className='icon-eye' id='hide1' style={{ display: 'none' }} /></label>
                                </div>
                                <div className='col-update-device-item'>
                                    <div className='row'>
                                        <p>T??nh tr???ng:</p>
                                        <p style={{ color: 'red', fontFamily: 'Nunito', margin: '4px' }}>*</p>
                                    </div>
                                    <div className='box' style={{ width: '540px' }}>
                                        <input readOnly name='TinhTrang' onClick={() => show('tt', 'up1', 'down1')} id='iptt' placeholder='Ch???n t??nh tr???ng' style={{ fontSize: '16px', width: '500px', cursor: 'pointer' }}></input>
                                        <label className='box-button' onClick={() => show('tt', 'up1', 'down1')} style={{ marginLeft: '500px', position: 'absolute' }} id='down1'><TiArrowSortedDown /></label>
                                        <label className='box-button' onClick={() => show('tt', 'up1', 'down1')} style={{ marginLeft: '500px', position: 'absolute', display: 'none' }} id='up1' ><TiArrowSortedUp /></label>
                                    </div>
                                    <div id='tt' className='select-drop-down' onClick={() => show('tt', 'up1', 'down1')} style={{ width: '540px', marginLeft: '590px', marginTop: '348px' }}>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('tc', 'iptt')}><label id='tc'>T???t c???</label></div>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('nhd', 'iptt')}><label id='nhd'>Ng???ng ho???t ?????ng</label></div>
                                        <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('hd', 'iptt')}><label id='hd'>Ho???t ?????ng</label></div>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className='row-ttbc'>
                            <p style={{ color: 'red', fontWeight: '700', margin: '4px' }}>*</p>
                            <p className='text-ttbc'>L?? tr?????ng th??ng tin b???t bu???c</p>
                        </div>
                    </div>
                    <div className='buton-device'>
                        <span onClick={() => nav("/AccountUser")} className='button-huy' > H???y b???</span>
                        <button className='myform-button ' type='submit'>Th??m </button>
                    </div>
                </form>
                <div className='title-report-type'>Qu???n l?? t??i kho???n</div>
                <Topbar nametitle1='C??i ?????t h??? th???ng ??? ' nametitle2='Qu???n l?? t??i kho???n ???' nametitle3='Th??m t??i kho???n' href='/AccountUser' href2='' nametitle21='' />
                <Menubar buttonid="qltk" />

            </div>
        </div>
    )

}
export default AddAccountUser;