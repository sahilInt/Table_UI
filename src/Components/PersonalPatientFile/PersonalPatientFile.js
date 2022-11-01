import React from 'react'
import "./PersonalPatientFile.css"
import { GiPaperBagCrumpled, GiHeartBeats, GiMedicines, GiLoveInjection } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import PhenotypeDrilldownDoughnut from '../PhenotypeDrilldownDoughnut/PhenotypeDrilldownDoughnut';
import WeightForcasting from '../WeightForcasting/WeightForcasting';
import LineChart from '../LineChart/LineChart';




const PersonalPatientFile = () => {
    return (
        <div className='health-overview-flex-div'>
            <div className='health-overview-width-div'>
                <div className='health-overview-main-div'>
                    <div className='health-overview-sub-div-one'>
                        <div className='health-overview-sub-div-one-part-one'>
                            <div className='health-overview-sub-one-title'>
                                <h3>Health Overview</h3>
                                <p>October 29, 2022</p>
                            </div>
                            <div className='health-overview-sub-one-flex'>
                                <p>Medical History</p>
                                <p>Questionnaire</p>
                                <p>Events</p>
                                <p>Documents</p>
                                <p>History</p>
                            </div>

                            <div className='medical-history-section-main-div'>
                                <div className='blood-sugar-card'>
                                    <div className='card-logo-in-medical-history'>
                                        <GiPaperBagCrumpled style={{ height: "25px", width: "25px", color: "white" }} />
                                    </div>
                                    <div className='card-detail-div-main-for-flex'>
                                        <div className='card-detail-div-main'>
                                            <h5>Blood Sugar</h5>
                                            <div className='card-detail-div-sub'>
                                                <h4>80</h4>
                                                <p>mg / dl</p>
                                            </div>
                                        </div>
                                        <div className='card-detail-div-for-btn'>
                                            <button className='nor-btn'>Normal</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='blood-sugar-card'>
                                    <div className='card-logo-in-medical-history-heart'>
                                        <GiHeartBeats style={{ height: "22px", width: "22px", color: "white" }} />
                                    </div>
                                    <div className='card-detail-div-main-for-flex'>
                                        <div className='card-detail-div-main'>
                                            <h5>Heart Rate</h5>
                                            <div className='card-detail-div-sub'>
                                                <h4>98</h4>
                                                <p>mg / dl</p>
                                            </div>
                                        </div>
                                        <div className='card-detail-div-for-btn'>
                                            <button className='nor-btn-heart'>Normal</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='blood-sugar-card'>
                                    <div className='card-logo-in-medical-history-blood'>
                                        <MdBloodtype style={{ height: "22px", width: "22px", color: "white" }} />
                                    </div>
                                    <div className='card-detail-div-main-for-flex'>
                                        <div className='card-detail-div-main'>
                                            <h5>Blood Pressure</h5>
                                            <div className='card-detail-div-sub'>
                                                <h4>100</h4>
                                                <p>/ 72 mmhg</p>
                                            </div>
                                        </div>
                                        <div className='card-detail-div-for-btn'>
                                            <button className='nor-btn-blood'>Normal</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='blood-sugar-card'>
                                    <div className='card-logo-in-medical-history-drugs'>
                                        <GiMedicines style={{ height: "22px", width: "22px", color: "white" }} />
                                    </div>
                                    <div className='card-detail-div-main-for-flex'>
                                        <div className='card-detail-div-main'>
                                            <h5>Drugs Prescribed</h5>
                                            <div className='card-detail-div-sub-three'>
                                                <h4>Phentermine</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='blood-sugar-card-last'>
                                    <div className='card-logo-in-medical-history-blood'>
                                        <MdBloodtype style={{ height: "22px", width: "22px", color: "white" }} />
                                    </div>
                                    <div className='card-detail-div-main-for-flex'>
                                        <div className='card-detail-div-main'>
                                            <h5>Comorbidities</h5>
                                            <div className='card-detail-div-sub-three'>
                                                <h4>Diabeties</h4>
                                                <h4>Cardiovascular</h4>
                                                <h4>Risk</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pheno-title-main'>
                                <h5>Phenotype Drilldown</h5>
                            </div>

                            <div className='pheno-div-section-tag'>
                                <div className='pheno-drill-doughnut-main-div'>
                                    <PhenotypeDrilldownDoughnut />
                                </div>

                                <div className='pheno-drill-sub-sec-two'>
                                    <div className='blood-sugar-card-in-pheno'>
                                        <div className='card-first-sec-div'>
                                            <div className='card-logo-in-contra-diction'>
                                                <GiLoveInjection style={{ height: "25px", width: "25px", color: "white" }} />
                                            </div>
                                            <div className='card-detail-div-main-for-flex'>
                                                <div className='card-detail-div-main'>
                                                    <h5>Contraindications</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='contra-dic-text'>
                                            <h2>2</h2>
                                        </div>
                                    </div>

                                    <div className='blood-sugar-card-in-pheno-two'>
                                        <div className='card-first-sec-div'>
                                            <div className='card-logo-in-medical-history-drugs'>
                                                <GiMedicines style={{ height: "25px", width: "25px", color: "white" }} />
                                            </div>
                                            <div className='card-detail-div-main-for-flex'>
                                                <div className='card-detail-div-main'>
                                                    <h5>Drug drug interactions</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='contra-dic-text'>
                                            <h2>1</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='pheno-title-main'>
                                <h5>Stages of Treatment</h5>
                            </div>

                            <div className='stages-treat-main-div-card'>
                                <div className='stages-treat-sub-one'>
                                    <div className='stages-treat-sub-one-sec-one'><p>1</p></div>
                                    <div className='stages-treat-sub-one-sec-two'><p>Screening</p></div>
                                </div>
                                <div>
                                    <hr style={{ width: "200px", marginTop: "-10px", border: "1.4px solid black" }} />
                                </div>
                                <div className='stages-treat-sub-one'>
                                    <div className='stages-treat-sub-one-sec-one'><p>2</p></div>
                                    <div className='stages-treat-sub-one-sec-two'><p>Assessment</p></div>
                                </div>
                                <div>
                                    <hr style={{ width: "200px", marginTop: "-10px", border: "1.4px solid rgb(174,205,234)" }} />
                                </div>
                                <div className='stages-treat-sub-one'>
                                    <div className='stages-treat-sub-one-sec-one-three'><p>3</p></div>
                                    <div className='stages-treat-sub-one-sec-two'><p>Intervention</p></div>
                                </div>
                            </div>



                        </div>
                    </div>




                    <div className='health-overview-sub-div-two'>
                        <div className='pateient-main-div'>
                            <div className='patient-img-name-div'>
                                <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJtyk8Ci_SBcBTIQbrxCO5UGrir4ZoVJ14A&usqp=CAU' className='patient-img-logo' /></div>
                                <div className='patient-info-main-div'>
                                    <p>Patient ID : P00000232</p>
                                    <h4>John Mathew, 29</h4>
                                </div>
                            </div>

                            <div class="dropdown-in-patient-details">

                                <button className='patient-last-week-btn'>Last Week  <FaAngleDown style={{ color: "rgb(0,138,201)", cursor: "pointer" }} /></button>
                                <span></span>
                                <div>
                                    <div class="dropdown-content-in-patient-details">
                                        <p>ABC</p>
                                        <p>DEF</p>
                                        <p>GHI</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='week-section-main-div'>
                            <div className='week-section-sub-div-one'>
                                <p className='week-para'>Week 1</p>
                                <div className='bmi-div-btn'><p>88.1 BMI</p></div>
                            </div>
                            <div className='week-section-sub-div-one'>
                                <p className='week-para'>Week 1</p>
                                <div className='bmi-div-btn'><p>88.1 BMI</p></div>
                            </div>
                            <div className='week-section-sub-div-one'>
                                <p className='week-para'>Week 1</p>
                                <div className='bmi-div-btn'><p>88.1 BMI</p></div>
                            </div>
                        </div>

                        <div className='chart-section-main-div'>
                            <p>Weight Forcasting</p>
                            <div className='weight-forcast-graph-div'>
                            <WeightForcasting/>
                            </div>
                        </div>

                        <div className='chart-section-main-div-last'>
                            <h4>Body Measurements</h4>
                            <p>Last Checked 2 Days Ago</p>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalPatientFile