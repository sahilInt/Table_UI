import React from 'react'
import Hexagone from "../../SVG/hexagonAqua.svg"
import DownArrow from "../../SVG/downArrow.svg"
import Circle from "../../SVG/circle.svg"
import FilledCircle from "../../SVG/filledCircle.svg"
import "../../Container/PersonalPatientFileMiddleScreen/PersonalPatientFileMiddleScreen.css"

const PPRightSideBar = () => {
  return (
    <div className='ppms-main-div-two'>
                        <div className='ppms-main-div-sub-div-two'>
                            <button>Stages of Treatment</button>
                        </div>
                        <div>
                            <div className='treatment-details-main-div-one'>
                                <div className='hexa-div-in-treat'>
                                    <img src={Hexagone} alt='' className='hexagone-svg' />
                                </div>
                                <div className='header-name-in-treat'>
                                    <h3>Screening</h3>
                                </div>
                                <div>
                                    <img src={DownArrow} alt='' className='down-arrow-svg-in-treat' />
                                </div>
                            </div>

                            <div className='treat-ment-sub-parts'>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Existing Medical Tests</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Additional Medical Tests</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p> Comorbity Screening</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Phenotype Screeing</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='treatment-details-main-div-one'>
                                <div className='hexa-div-in-treat'>
                                    <img src={Hexagone} alt='' className='hexagone-svg' />
                                </div>
                                <div className='header-name-in-treat'>
                                    <h3>Assessment</h3>
                                </div>
                                <div>
                                    <img src={DownArrow} alt='' className='down-arrow-svg-in-treat' />
                                </div>
                            </div>

                            <div className='treat-ment-sub-parts'>
                                <div className='treat-sub-header-main-div'>
                                    <div>
                                        <img src={FilledCircle} alt='' className='filled-circle-svg-in-treat' />
                                    </div>
                                    <div className='treat-sub-header-font-tag'>
                                        <p>Existing Medical Tests</p>
                                    </div>
                                    <div>
                                        <img src={DownArrow} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Medical History</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Child Growth</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p> Parental Obesity</p>
                                    </div>
                                </div>
                            </div>


                            <div className='treat-ment-sub-parts'>
                                <div className='treat-sub-header-main-div'>
                                    <div>
                                        <img src={FilledCircle} alt='' className='filled-circle-svg-in-treat' />
                                    </div>
                                    <div className='treat-sub-header-font-tag'>
                                        <p>Behaviour Risk</p>
                                    </div>
                                    <div>
                                        <img src={DownArrow} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Sedentary Time</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Eating</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p> Physical Activity</p>
                                    </div>
                                </div>
                                <div className='treat-sub-header-main-div'>
                                    <div>
                                        <img src={FilledCircle} alt='' className='filled-circle-svg-in-treat' />
                                    </div>
                                    <div className='treat-sub-header-font-tag'>
                                        <p>Activity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='treatment-details-main-div-one'>
                                <div className='hexa-div-in-treat'>
                                    <img src={Hexagone} alt='' className='hexagone-svg' />
                                </div>
                                <div className='header-name-in-treat'>
                                    <h3>Intervention</h3>
                                </div>
                                <div>
                                    <img src={DownArrow} alt='' className='down-arrow-svg-in-treat' />
                                </div>
                            </div>

                            <div className='treat-ment-sub-parts'>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Surgical</p>
                                    </div>
                                </div>
                                <div className='treatment-details-main-div-one-sub-one'>
                                    <div>
                                        <img src={Circle} alt='' className='down-arrow-svg-in-treat' />
                                    </div>
                                    <div className='header-name-in-treat-sub-sec'>
                                        <p>Medical</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default PPRightSideBar