import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { setDayTime } from '../../redux/action';
import './calenda.css';
const Calenda = () => {
    const [date, setdate] = useState(new Date());
    const dispatch = useDispatch()
    dispatch(setDayTime(date))
    return (
        <div className='calendar'>
            <Calendar onChange={setdate} value={date} locale='en' />

        </div>
    );
};

export default Calenda;
