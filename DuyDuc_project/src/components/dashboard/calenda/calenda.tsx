import React from "react";
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import type { Moment } from 'moment';
import './calenda.css';
const Calenda: React.FC = () => {
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    );
};


export default Calenda