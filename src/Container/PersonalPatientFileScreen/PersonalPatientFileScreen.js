import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SecondNavbar from '../../Components/SecondNavbar/SecondNavbar'
import SideNav from '../../Components/SideNav/SideNav'
import "./PersonalPatientFileScreen.css"
import PPSecondNavbar from '../../Components/PPSecondNavbar/PPSecondNavbar'
import PersonalPatientFileMiddleScreen from '../PersonalPatientFileMiddleScreen/PersonalPatientFileMiddleScreen'

const PersonalPatientFileScreen = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <div className='pwes-pat-main-scr-flex-div'>
            <div className='pwes-pat-main-scr-width-div'>
                <div className='pwes-pat-main-scr-main-div'>
                    <div className='top-navbars-flex-div'>
                    <div className='top-navbars-width-div'>
                    <div className='top-navbars-main-div'>
                        <div>
                            <Navbar Name='SK-PHARMA' />
                        </div>
                        <div>
                            <SecondNavbar onClick={handleViewSidebar} />
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className='personal-patient-list-home-flex-div'>
                        <div className='personal-patient-list-width-div'>
                            <div className='personal-patient-list-flex-main-div'>
                                <div className='personal-patient-list-main-div-two-for-flex-and-display'>

                                    <div className='personal-patient-list-main-div-one'>
                                        <SideNav isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
                                    </div>
                                </div>
                                <div className='personal-patient-list-main-div-two-for-flex-and-display'>
                                    <div className='personal-patient-list-main-div-two'>
                                        <div>
                                            <PPSecondNavbar />
                                        </div>
                                        <div>
                                            <PersonalPatientFileMiddleScreen />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalPatientFileScreen