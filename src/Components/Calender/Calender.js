import React, { useState } from 'react'
import "./Calender.css"
// import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='calender-main-div'>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default Calender