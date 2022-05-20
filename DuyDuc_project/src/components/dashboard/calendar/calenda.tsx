import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calenda.css';
const Calenda: React.FC = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='calendar'>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};

export default Calenda;
