import logo from './logo.svg';
import './App.css';
import PersonalPatientFileScreen from './Container/PersonalPatientFileScreen/PersonalPatientFileScreen';
import RoutesApp from './RoutesApp';


function App() {
  return (
    <div className="App">
    <RoutesApp/>
    {/*
    <PersonalPatientFileScreen/>

      <TableHomescreen/>
      <WeightChart/>
      <LineChart/>
    */}
    </div>
  );
}

export default App;


// import React from 'react'
// import './App.css';

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './Components/Pages/About'
// import Analytics from './Components/Pages/Analytics'
// import Comment from './Components/Pages/Comment'
// import Dashboard from './Components/Pages/Dashboard'
// import Product from './Components/Pages/Product'
// import ProductList from './Components/Pages/ProductList'
// import Sidebar from './Components/Sidebar/Sidebar'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path='' element={<Dashboard />} />
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/analytics' element={<Analytics />} />
//           <Route path='/comment' element={<Comment />} />
//           <Route path='/product' element={<Product />} />
//           <Route path='/productlist' element={<ProductList />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   )
// }

// export default App
