import React from 'react'
import '../Table/Table.css'

const TableData = (props) => {
    return (

        <div className='table-page-sub-div-two'>
            <div className='table-col-heading-one'><p>{props.id}</p></div>
            <div className='table-col-heading-two'><p>{props.gender}</p></div>
            <div className='table-col-heading-three'><p>{props.dob}</p></div>
            <div className='table-col-heading-four'><p>{props.age}</p></div>
            <div className='table-col-heading-five'><p>{props.bmi}</p></div>
            <div className='table-col-heading-six'><p>{props.destinant}</p></div>
            <div className='table-col-heading-seven'><p>{props.wb}</p></div>
            <div className='table-col-heading-eight'><p>{props.wc}</p></div>
            <div className='table-col-heading-nine'><p>{props.wt}</p></div>
            <div className='table-col-heading-ten'><p>{props.phenotype}</p></div>
            <div className='table-col-heading-eleven'><p>{props.drug}</p></div>
            <div className='table-col-heading-tweleve'><p>-</p></div>
            <div className='table-col-heading-thirteen'><p>{props.bgdisease}</p></div>
            <div className='table-col-heading-fourteen'><p>{props.phenopercentage}</p></div>
            <div className='table-col-heading-fifteen'><p>{props.progresspercent}</p></div>
            <div className='table-col-heading-sixteen'><p>-</p></div>
            <div className='table-col-heading-seventeen'><p>{props.Idate}</p></div>
            <div className='table-col-heading-eighteen'><p>{props.digit}</p></div>
            <div className='table-col-heading-ninteen'><p>:</p></div>
        </div>


        /*<div className='table-page-sub-div-two'>
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
    </div>*/

    )
}

export default TableData