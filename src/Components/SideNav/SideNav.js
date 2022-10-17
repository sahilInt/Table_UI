import React, { useState } from 'react'
import './SideNav.css'
import Dashboard from "../../SVG/dashboard.svg"
import Visit from "../../SVG/doctor.svg"
import Medical from "../../SVG/medical.svg"
import Patient from "../../SVG/patient.svg"
import List from "../../SVG/list.svg"
import Admin from "../../SVG/admin.svg"
import MenuSvg from "../../SVG/menu.svg"

const SideNav = (props) => {
 
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar"

  return (
    <>
    {/*<button onClick={props.toggleSidebar} className="sidebar-toggle">
    <img src={MenuSvg} alt='' className='menu-in-sidebar'/>
  </button>*/}
  <div className={sidebarClass}>
      <div className='side-nav-flex-div'>
        <div className='side-nav-width-div'>
          <div className='side-nav-main-div'>
            <div className='side-nav-sub-div-one'>
              <div><img src={Dashboard} className="side-nav-logo-img" alt='' /></div>
              <div><p>Dashboard</p></div>
            </div>
            <div className='side-nav-sub-div-one'>
              <div><img src={Visit} className="side-nav-logo-img" alt='' /></div>
              <div><p>Doctor Visit</p></div>
            </div>
            <div className='side-nav-sub-div-one'>
              <div><img src={Medical} className="side-nav-logo-img" alt='' /></div>
              <div><p>Medical History</p></div>
            </div>
            <div className='side-nav-sub-div-one'>
              <div><img src={Patient} className="side-nav-logo-img" alt='' /></div>
              <div><p>Personal Patient File</p></div>
            </div>
            <div className='side-nav-sub-div-one'>
              <div><img src={List} className="side-nav-logo-img" alt='' /></div>
              <div><p>Patient List</p></div>
            </div>
            <div className='side-nav-sub-div-one'>
              <div><img src={Admin} className="side-nav-logo-img" alt='' /></div>
              <div><p>Admin</p></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SideNav