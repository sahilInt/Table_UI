import React from 'react'
import './Navbar.css'
import Notification from "../../SVG/notification.svg"
import Bag from "../../SVG/bag.svg"

import { GiDirectionSign } from "react-icons/gi";
import { BsFillBagCheckFill, BsBell } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";


const Navbar = (props) => {
    return (
        <div className='navbar-flex-div'>
            <div className='navbar-width-div'>
                <div className='navbar-main-div'>
                    <div className='navbar-sub-div-one'>

                        <h3>{props.Name}</h3>
                    </div>
                    <div className='navbar-sub-div-two'>
                        <div className='nav-symb-div'>
                            <GiDirectionSign style={{ height: "20px", width: "20px", color: "rgb(0,138,201)", cursor: "pointer" }} />
                            {/*<img src={Direction} className="nav-svg-icon" alt='' />*/}
                        </div>
                        <div className='nav-symb-div'>
                            <BsFillBagCheckFill style={{ height: "20px", width: "20px", color: "rgb(0,138,201)", cursor: "pointer" }} />
                            {/*<img src={Bag} className="nav-svg-icon" alt='' />*/}
                        </div>
                        <div className='nav-symb-div'>
                            <BsBell style={{ height: "20px", width: "20px", color: "rgb(0,138,201)", cursor: "pointer" }} />
                            {/*<img src={Notification} className="nav-svg-icon" alt='' />*/}
                        </div>
                        <div className='user-img-in-nav'>
                            <div>
                                <img src='https://img.freepik.com/premium-vector/user-icon_126283-435.jpg?w=2000' className='user-img-tag-in-nav-bar' />
                            </div>
                            <div class="dropdown">
                                <FaAngleDown style={{ color: "rgb(0,138,201)", cursor: "pointer" }} />
                                <span></span>
                                <div>
                                    <div class="dropdown-content">
                                        <p>Account Setting</p>
                                        <p>User Profile</p>
                                        <p>Log Out!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar