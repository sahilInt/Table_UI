import React from 'react'
import "./Dashboard.css"
import { GoAlert } from "react-icons/go";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Calender from '../Calender/Calender';
import AvgPatientGraph from '../AvgPatientGraph/AvgPatientGraph';
import TreatmentSuccessRateDoughnut from '../TreatmentSuccessRateDoughnut/TreatmentSuccessRateDoughnut';

const Dashboard = () => {
    return (
        <div className='dahs-board-flex-div'>
            <div className='dahs-board-width-div'>
                <div className='dash-board-main-div-for-flex'>
                    <div className='dahs-board-main-div'>
                        <div className='dahs-board-sub-div-one'>
                            <h4>Welcome back, Dr. Shlomo</h4>
                            <p>Thank you for using Obesity Tool,the digital workplace. It's a pleasure to have you here!!</p>
                            <p>This is the Obesity Tool dashboard. Here you can fin data and summarise about your Patient and treatment activity. </p>
                        </div>
                        <div className='dahs-board-sub-div-two'>
                            <div className='dahs-board-sub-div-two-width'>
                                <div className='dahs-board-sub-div-two-part-one'>
                                    <div className='sub-two-card-one'>
                                        <p className='card-para-tag'>Active Patient</p>
                                        <h4>47</h4>
                                    </div>
                                    <div className='sub-two-card-two-alerts'>
                                        <p className='card-para-tag'>Critical Alerts</p>
                                        <div className='critical-alerts-div'>
                                            <GoAlert style={{ color: 'red' }} />
                                            <h4>15</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='dahs-board-sub-div-two-part-one'>
                                    <div className='sub-two-card-one'>
                                        <p className='card-para-tag'>Patient Treated in the next 48 hours</p>
                                        <h4>2</h4>
                                    </div>
                                    <div className='sub-two-card-two-warning'>
                                        <p className='card-para-tag'>Warning Alerts</p>
                                        <AiFillExclamationCircle style={{ color: 'rgb(255,192,72)', height: '25px', width: '25px', paddingTop: '24px' }} />
                                    </div>
                                </div>
                                <div className='dahs-board-sub-div-two-part-one'>
                                    <div className='sub-two-card-one'>
                                        <p className='card-para-tag'>Drugs drugs interaction</p>
                                        <h4>2</h4>
                                    </div>
                                    <div className='sub-two-card-two'>
                                        <p className='card-para-tag'>Treatment Success Rate</p>
                                        <h4>23.07%</h4>
                                    </div>
                                </div>
                                <div className='dahs-board-sub-div-two-part-one'>
                                    <div className='sub-two-card-one-full'>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                                            <FaUserAlt style={{ color: 'rgb(45,164,215)' }} />
                                            <p className='card-para-tag'>New Patient</p>
                                        </div>
                                        <h4 style={{ paddingTop: '24px' }}>200</h4>
                                        <hr style={{ marginTop: '59px' }} />
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', paddingTop: '30px' }}>
                                            <FaUserAlt style={{ color: 'rgb(45,164,215)' }} />
                                            <p className='card-para-tag'>Existing Patient</p>
                                        </div>
                                        <h4 style={{ paddingTop: '24px' }}>200</h4>
                                    </div>

                                </div>
                                <div className='dahs-board-sub-div-two-part-two'>
                                    <Calender />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dahs-board-main-div-two'>
                    <div className='dahs-board-main-div-two-sub-one'>
                    <h4 style={{textAlign:'center'}}>Average Patient Visits</h4>
                    <AvgPatientGraph/></div>
                    <div className='dahs-board-main-div-two-sub-one'>
                    <h4 style={{textAlign:'center'}}>Treatment Success Rate</h4>
                    <TreatmentSuccessRateDoughnut/>
                    </div>
                    <div className='dahs-board-main-div-two-sub-one'>Link</div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard