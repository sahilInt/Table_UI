import React, { useState } from 'react'
import "./ProgressBar.css"


const Progress = ({ done }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 10,
            width: `${done}%`
        }
        setStyle(newStyle)
    },);

    return (
        <div className='progress'>
            <div className='progress-done' style={style}>

            </div>
        </div>
    )
}


const ProgressInfo = (props) => {
    return (
        <div className='progress-bar-sub-div-one'>
            <h4>{props.ageGroup}</h4>
            <p>{props.totalperson}</p>
        </div>
    )
}



const ProgressBar = () => {
    return (
        <div className='progress-bar-main-div'>
            <div>
                <ProgressInfo ageGroup="18-24" totalperson="65,376" />
                <Progress done="70" />
            </div>
            <div>
                <ProgressInfo ageGroup="25-34" totalperson="12,109" />
                <Progress done="50" />
            </div>
            <div>
                <ProgressInfo ageGroup="18-24" totalperson="65,376" />
                <Progress done="90" />
            </div>
            <div>
                <ProgressInfo ageGroup="18-24" totalperson="65,376" />
                <Progress done="40" />
            </div>
        </div>
    )
}

export default ProgressBar