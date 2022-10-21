import React, { useState } from 'react';
import "./RightCollapsibleSidebar.css"
import {
    FaBars,

}from "react-icons/fa";
import PPRightSideBar from '../PPRightSideBar/PPRightSideBar';


const RightCollapsibleSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
   
    return (
        <div className="right-container">
           <div style={{width: isOpen ? "100%" : "50px"}} className="right-sidebar">
               <div className="right-top_section">
    {/*<h1 style={{display: isOpen ? "block" : "none"}} className="right-logo">Logo</h1>*/}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="right-bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div style={{display: isOpen ? "block" : "none"}}>
               <PPRightSideBar/>
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default RightCollapsibleSidebar;