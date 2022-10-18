import React from 'react'
import "./PersonalPatientFileMiddleScreen.css"
import PPRightSideBar from '../../Components/PPRightSideBar/PPRightSideBar'
import MainDoughnut from '../../Components/MainDoughnut/MainDoughnut'
import Avtar from '../../Components/Avtar/Avtar'

const PersonalPatientFileMiddleScreen = () => {
    return (
        <div className='ppms-flex-div'>
            <div className='ppms-width-div'>


                <div className='ppms-main-div'>
                    <div className='ppms-full-screen-display-div'>

                        <div className='xyz'>

                            <div className='ppms-main-div-one'>
                                <div className='ppms-top-text-area-main-flex-div'>
                                    <div className='ppms-top-text-area-main-width-div'>
                                        <div className='ppms-top-text-area-main-div'>
                                            <div className='ppms-top-text-area-sub-div-one'>

                                            </div>
                                            <div className='ppms-top-text-area-sub-div-two'>
                                                <div className='text-area-sub-one'>
                                                    <p>0033454569</p>
                                                </div>
                                                <div className='text-area-sub-two'>
                                                    <div className='text-area-sub-two-div-one'>
                                                        <p>88.1</p>
                                                        <h4>BMI</h4>
                                                    </div>
                                                    <div className='text-area-sub-two-div-one'>
                                                        <p>88.1</p>
                                                        <h4>BMI</h4>
                                                    </div>
                                                    <div className='text-area-sub-two-div-one'>
                                                        <p>88.1</p>
                                                        <h4>BMI</h4>
                                                    </div>
                                                    <div className='text-area-sub-two-div-one'>
                                                        <p>88.1</p>
                                                        <h4>BMI</h4>
                                                    </div>
                                                    <div className='text-area-sub-two-div-one'>
                                                        <p>88.1</p>
                                                        <h4>BMI</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='ppms-main-screen-div-two'>
                            <div className='ppms-main-screen-width'>
                            <div className='ppms-main-screen-flex-display'>

                                <div className='ppms-main-screen-sub-div-one'>
                                    <MainDoughnut />
                                    
                                </div>
                                <div className='ppms-main-screen-sub-div-two'>
                                    <Avtar/>
                                </div>
                                <div className='ppms-main-screen-sub-div-three'>
                                    Chart
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <PPRightSideBar />
                </div>


            </div>

        </div>
    )
}

export default PersonalPatientFileMiddleScreen