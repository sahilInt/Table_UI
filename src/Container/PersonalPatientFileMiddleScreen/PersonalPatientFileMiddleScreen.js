import React from 'react'
import "./PersonalPatientFileMiddleScreen.css"
import PPRightSideBar from '../../Components/PPRightSideBar/PPRightSideBar'
import MainDoughnut from '../../Components/MainDoughnut/MainDoughnut'
import Avtar from '../../Components/Avtar/Avtar'
import WeightChart from '../../Components/WeightChart/WeightChart'
import HorizontalAgeGraph from '../../Components/HorizontalAgeGraph/HorizontalAgeGraph'
import GenderDoughnut from '../../Components/GenderDoughnut/GenderDoughnut'
import AgeDoughnut from '../../Components/AgeDoughnut/AgeDoughnut'
import LineChart from '../../Components/LineChart/LineChart'

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
                                        <Avtar />
                                    </div>
                                    <div className='ppms-main-screen-sub-div-three'>
                                    <WeightChart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='ppms-main-scr-div-three-for-flex'>
                            <div className='ppms-main-scr-div-three-for-width'>
                                <div className='ppms-main-scr-div-three-for-main'>
                                    <p>Phenotype Drill Down</p>
                                    <p>Items</p>
                                    <p>Quotation</p>
                                    <p>Events</p>
                                    <p>Documents</p>
                                    <p>History</p>
                                </div>
                            </div>
                        </div>


                        <div className='ppms-main-scr-div-four-for-flex'>
                            <div className='ppms-main-scr-div-four-for-width'>
                                <div className='ppms-main-scr-div-four-for-main'>
                                    <div className='age-and-graph-main-div'>
                                        <div className='age-and-graph-sub-div-one'>
                                            {/*<div className='age-and-graph-sub-div-one-div-one'>Blank Space</div>*/}
                                            <div className='age-and-graph-sub-div-one-div-two'><HorizontalAgeGraph /></div>
                                        </div>
                                        <div className='age-and-graph-main-div-two'>Graph</div>
                                    </div>
                                    <div className='doughnut-for-gender-and-age-flex-div'>
                                        <div className='doughnut-for-gender-and-age-width-div'>
                                            <div className='doughnut-for-gender-and-age-main-div'>
                                                <div><GenderDoughnut /></div>
                                                <div><AgeDoughnut /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <LineChart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='ppms-main-scr-div-five-for-flex'>
                            <div className='ppms-main-scr-div-five-for-width'>
                                <div className='ppms-main-scr-div-five-for-main'>
                                    <div className='ppms-scr-five-sub-one'>
                                        <div className='ppms-scr-five-sub-one-part-one'>
                                            <h3>Total Stories</h3>
                                            <h4>7</h4>
                                            <p>↓ 2.7%</p>
                                        </div>
                                        <div className='ppms-scr-five-sub-one-part-one'>
                                            <h3>Total Stories</h3>
                                            <h4>7</h4>
                                            <p>↓ 2.7%</p>
                                        </div>
                                    </div>
                                    <div className='ppms-scr-five-sub-one'>
                                        <div className='ppms-scr-five-sub-one-part-one'>
                                            <h3>Total Stories</h3>
                                            <h4>7</h4>
                                            <p>↓ 2.7%</p>
                                        </div>
                                        <div className='ppms-scr-five-sub-one-part-one'>
                                            <h3>Total Stories</h3>
                                            <h4>7</h4>
                                            <p>↓ 2.7%</p>
                                        </div>
                                    </div>
                                    <div className='ppms-scr-five-sub-one'>
                                        <div className='ppms-scr-five-sub-one-part-one'>
                                            <h3>Total Stories</h3>
                                            <h4>7</h4>
                                            <p>↓ 2.7%</p>
                                        </div>
                                        <div className='ppms-scr-five-sub-one-part-one'>
                                            <h3>Total Stories</h3>
                                            <h4>7</h4>
                                            <p>↓ 2.7%</p>
                                        </div>
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