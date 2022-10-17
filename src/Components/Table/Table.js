import React from 'react'
import './Table.css'
import HelpQuestion from "../../SVG/help.svg"
import RightArrow from "../../SVG/arrows.svg"
import TableData from '../TableData/TableData'

const Table = () => {
    return (
        <div className='table-page-flex-div'>
            <div className='table-page-width-div'>
                <div className='table-page-main-div'>
                    <div className='table-page-sub-div-one'>
                        <div className='table-col-heading-one'><h5>ID</h5></div>
                        <div className='table-col-heading-two'><h5>Gender</h5></div>
                        <div className='table-col-heading-three'><h5>D.of Birth</h5></div>
                        <div className='table-col-heading-four'><h5>Age</h5></div>
                        <div className='table-col-heading-five'><h5>BMI</h5></div>
                        {/*<div className='table-col-heading-five-logo-in-header'><img src={HelpQuestion} className="help-quetion-mark-logo" alt=''/></div>*/}
                        <div className='table-col-heading-six'><h5>Destinat</h5></div>
                        {/*<div className='table-col-heading-five-logo-in-header'><img src={HelpQuestion} className="help-quetion-mark-logo" alt=''/></div>*/}
                        <div className='table-col-heading-seven'><h5>Weight <br /> (Beginning)</h5></div>
                        <div className='table-col-heading-eight'><h5>Weight <br /> (Current)</h5></div>
                        <div className='table-col-heading-nine'><h5>Weight <br /> Target</h5></div>
                        <div className='table-col-heading-ten'><h5>Phenotype</h5></div>
                        <div className='table-col-heading-eleven'><h5>Dispensed <br /> Drug</h5></div>
                        <div className='table-col-heading-tweleve'><h5>Dosage</h5></div>
                        <div className='table-col-heading-thirteen'><h5>Background Diseases</h5></div>
                        <div className='table-col-heading-fourteen'><h5>% match <br />to phenotype</h5></div>
                        <div className='table-col-heading-fifteen'><h5>Progress % according <br /> to the plan</h5></div>
                        <div className='table-col-heading-sixteen'></div>
                        <div className='table-col-heading-seventeen'></div>
                        <div className='table-col-heading-eighteen'></div>
                        <div className='table-col-heading-ninteen'></div>
                    </div>
                    {/*<div className='table-page-sub-div-two'>
                        <div className='table-col-heading-one'><p>P0000232</p></div>
                        <div className='table-col-heading-two'><p>4500</p></div>
                        <div className='table-col-heading-three'><p>21/07/22</p></div>
                        <div className='table-col-heading-four'><p>CIF</p></div>
                        <div className='table-col-heading-five'><p>SZX</p></div>
                        <div className='table-col-heading-six'><p>SZX</p></div>
                        <div className='table-col-heading-seven'><p>on supplier</p></div>
                        <div className='table-col-heading-eight'><p>supplier test</p></div>
                        <div className='table-col-heading-nine'><p>Demo User</p></div>
                        <div className='table-col-heading-ten'><p>Just Play Children</p></div>
                        <div className='table-col-heading-eleven'><p>424.56245</p></div>
                        <div className='table-col-heading-tweleve'><p>-</p></div>
                        <div className='table-col-heading-thirteen'><p>Confirm by...</p></div>
                        <div className='table-col-heading-fourteen'><p>Opened</p></div>
                        <div className='table-col-heading-fifteen'><p>-</p></div>
                        <div className='table-col-heading-sixteen'><p>-</p></div>
                        <div className='table-col-heading-seventeen'><p>Invalid Date</p></div>
                        <div className='table-col-heading-eighteen'><p>2</p></div>
                        <div className='table-col-heading-ninteen'><p>:</p></div>
    </div>*/}

                    <div className='tabale-data-div'>
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                        <TableData id="P0000232" gender="4500" dob="21/07/22" age="CIF" bmi="SZX" destinant="SZX" wb="on supplier" wc="supplier test" wt="Demo User"
                            phenotype="Just Play Children" drug="424.56245" bgdisease="-" phenopercentage="Confirm by..."
                            progresspercent="Opened" Idate="Invalid Date" digit="2" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Table