import React from 'react'
import {Link} from "react-router-dom"
import './PPSecondNavbar.css'
import LeftArrow from "../../SVG/leftArrow.svg"
import Refresh from "../../SVG/refresh.svg"
import Menu from "../../SVG/menu.svg"
import RightArrow from "../../SVG/rightarrow.svg"


const PPSecondNavbar = () => {
    return (
        <div className='personal-patient-second-nav-flex-div'>
            <div className='personal-patient-second-nav-width-div'>
                <div className='personal-patient-second-nav-main-div'>
                    <div className='personal-patient-second-nav-main-div-one'>
                        <div className='personal-patient-second-nav-sub-div-one'>
                            <div className='pp-arrow-div'> <img src={LeftArrow} className="second-pp-nav-svg-logo" alt='' /> <h2>Go Back</h2></div>
                        </div>
                        <div className='personal-patient-second-nav-sub-div-two'>
                            <input className='personal-patient-second-nav-input-tag' placeholder='DRAFT' />
                        </div>
                        <div>
                            <img src={RightArrow} className="right-arrow-tag" alt='' />
                        </div>
                    </div>

                    <div className='personal-patient-second-nav-main-div-two'>

                        <div className='pp-arr-w-main-div-two'><p>Last Update 08/10/2022 21:24</p></div>

                        <div className='personal-patient-second-nav-sub-div-three'>
                            <button className='pp-second-nav-btns-div'>
                                Edit
                            </button>
                            <button className='pp-second-nav-btns-div'>
                                Duplicate
                            </button>
                            <div>
                                <img src={Refresh} className="second-pp-nav-svg-logo-two" alt='' />
                            </div>
                            <div>
                            <img src={Menu} className="second-pp-nav-svg-logo-two" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PPSecondNavbar