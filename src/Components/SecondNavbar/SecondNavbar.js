import React from 'react'
import "./SecondNavbar.css"
import MenuSvg from "../../SVG/menu.svg"
import Reload from "../../SVG/reload.svg"

const SecondNavbar = (props) => {
    return (


        <div className='second-nav-flex-div'>
            <div className='second-nav-width-div'>
                <div className='second-nav-main-div'>
                    <div className='second-nav-sub-div-one'>
                        <header>
                            <img onClick={props.onClick} src={MenuSvg} alt='' className='menu-in-sidebar' />
                        </header>
                        <div>
                            <p>All POs</p>
                        </div>
                    </div>
                    <div className='second-nav-sub-div-two'>
                        <div className='reload-div'>
                            <img src={Reload} alt='' className='reload-img-tag' />
                        </div>
                        <div className='input-field-div'>
                        <input placeholder='Filter POs' className='input-field-tag'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SecondNavbar


