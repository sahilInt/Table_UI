import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RightCollapsibleSidebar from '../../Components/RightCollapsibleSidebar/RightCollapsibleSidebar'
import SecondNavbar from '../../Components/SecondNavbar/SecondNavbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SideNav from '../../Components/SideNav/SideNav'
import Table from '../../Components/Table/Table'
import './TableHomescreen.css'

const TableHomescreen = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <div className='table-home-flex-div'>
            <div className='table-home-width-div'>
                <div>
    {/*<Navbar Name='CARGOZONE' />*/}
                </div>

                <div>
    {/*<SecondNavbar onClick={handleViewSidebar} />*/}
                </div>

                <div className='table-home-main-div'>
                <div className='table-home-main-div-for-width'>
                   {/* <div className='table-home-sub-div-one'>
                        <SideNav isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>*/}
                    <div className='table-home-sub-div-two'>
                        <Table />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableHomescreen