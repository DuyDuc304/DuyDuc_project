import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calenda.css';
const Calenda = () => {
    const [date, onChange] = useState(new Date());

    return (
        <div className='calendar'>
            <Calendar onChange={onChange} value={date} locale='en' />
            <p>{date.toLocaleDateString()}</p>
        </div>
    );
};

export default Calenda;
