import React from 'react'
import "./SecondNavbar.css"
import MenuSvg from "../../SVG/menu.svg"
import Reload from "../../SVG/reload.svg"
import Download from "../../SVG/download.svg"
import Glass from "../../SVG/glass.svg"
import Plus from "../../SVG/plus.svg"

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
                        <div className='reload-div'>
                            <img src={Download} alt='' className='reload-img-tag' />
                        </div>
                        <div className='reload-div'>
                            <img src={Glass} alt='' className='reload-img-tag' />
                        </div>
                        <div className='reload-div'>
                            <img src={Plus} alt='' className='reload-img-tag' />
                        </div>
                        <div>
                        <p>1 - 30 of 32</p>
                        </div>
                        <div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SecondNavbar


