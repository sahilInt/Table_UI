import React from 'react'
import "./CollapsibleSIdebarRoutes.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Analytics from '../../Components/Pages/Analytics'
import Comment from '../../Components/Pages/Comment'
import PersonalPatientFile from '../../Components/PersonalPatientFile/PersonalPatientFile'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Product from '../../Components/Pages/Product'
import ProductList from '../../Components/Pages/ProductList'
import Sidebar from '../../Components/Sidebar/Sidebar'
import PersonalPatientFileMiddleScreen from '../../Container/PersonalPatientFileMiddleScreen/PersonalPatientFileMiddleScreen'
import Navbar from '../../Components/Navbar/Navbar'
import RightCollapsibleSidebar from '../../Components/RightCollapsibleSidebar/RightCollapsibleSidebar'


const CollapsibleSIdebarRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar Name='SK-PHARMA' />
      <Sidebar>
        <Routes>
          <Route path='' element={<Dashboard />} />
          {/*<Route path='/patientlist' element={<TableHomescreen/>} />*/}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<PersonalPatientFileMiddleScreen />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/personalpatientpage' element={<PersonalPatientFile />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/rightsidebar' element={<RightCollapsibleSidebar />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default CollapsibleSIdebarRoutes