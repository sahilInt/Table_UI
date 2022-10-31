import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


const RecentActivityUser = () => {
    return (
        <div className='recent-activity-main-div'>
            <div className='recent-activity-sub-div-one'>
                <div className='recent-activity-sub-div-one-part-one'>
                    <img src="https://banner2.cleanpng.com/20180325/oiq/kisspng-businessperson-computer-icons-avatar-passport-5ab7da5ba4ea53.1027634415219984276755.jpg" className="user-img-in-recent-activity" />
                </div>
                <div className='recent-activity-sub-div-one-part-two'>
                    <div>
                        <h5>William John</h5>
                    </div>
                    <div>
                        <p>30 OCT 7:45PM</p>
                    </div>
                </div>

            </div>
            <div className='recent-activity-sub-div-two'>
                <div>
                    <p>Neurology</p>
                </div>
                <div>
                    <BsThreeDotsVertical style={{ color: 'rgb(171,171,171)' }} />
                </div>
            </div>

        </div>
    )
}

export default RecentActivityUser