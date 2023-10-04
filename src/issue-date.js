import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePick = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <DatePicker selected={date} onChange={(date) => setDate(date)} className="inputDate"/>
        </div>
    );
}

export default DatePick;