import React from 'react'
import "./Avtar.css"
import FatMan from "../../SVG/fatMan.svg"
import SlimMan from "../../SVG/slimMan.svg"
import RightArrowAnime from "../../SVG/rightarrowavtar.svg"

const Avtar = () => {
  return (
    <div className='avtar-comp-flex-div'>
    <div className='avtar-comp-width-div'>
    <div className='avtar-comp-main-div'>
    <div className='avtar-comp-sub-div-one'>
        <img src={FatMan} alt='' className='avtar-fat-man-svg'/>
    </div>
    <div className='avtar-comp-sub-div-two'>
    <img src={RightArrowAnime} alt='' className='avtar-right-arrow-anime-svg'/>
    
    </div>
    <div className='avtar-comp-sub-div-three'>
    <img src={SlimMan} alt='' className='avtar-fat-man-svg'/>
    
    </div>
    </div>
    </div>
    </div>
  )
}

export default Avtar