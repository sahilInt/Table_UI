import React from 'react'
import './Navbar.css'
import Notification from "../../SVG/notification.svg"
import Direction from "../../SVG/direction.svg"
import Bag from "../../SVG/bag.svg"

const Navbar = () => {
    return (
        <div className='navbar-flex-div'>
            <div className='navbar-width-div'>
            <div className='navbar-main-div'>
            <div className='navbar-sub-div-one'>
                <h3>CARGOZONE</h3>
            </div>
            <div className='navbar-sub-div-two'>
            <div>
            <img src={Direction} className="nav-svg-icon" alt=''/>
            </div>
            <div>
            <img src={Bag} className="nav-svg-icon" alt=''/>
            </div>
            <div>
            <img src={Notification} className="nav-svg-icon" alt=''/>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar