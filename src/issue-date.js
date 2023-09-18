import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Date = () => {
    const [Date, setDate] = useState(new Date());
    return (
        <div>
            <DatePicker selected={Date} onChange={(Date) => setDate(Date)} />
        </div>
    );
}

export default Date;