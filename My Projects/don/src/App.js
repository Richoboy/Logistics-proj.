import React from 'react';
import './App.scss';
import './Navstyle.scss'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/pages/home';
import BecomeADriver from './component/pages/BecomeADriver';
import DroppleApp from './component/pages/DroppleApp';
import About from './component/pages/About';
import Login from './component/Login';
import Address from './component/pages/Address';


function App() {
  return (
    <div>
      <Navbar />
    
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/BecomeADriver" element={<BecomeADriver/>}/>
        <Route path="/DroppleApp" element={<DroppleApp/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
       <Route path='/Address' element={<Address/>}/>
      </Routes>
    </div>
    </div>
  );
}
  
export default App;