// import logo from './logo.svg';
import "./App.css";
import "./styles/home.scss";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComp from "./components/nav";
import HomeComp from "./components/pages/home";
import DroppleComp from "./components/pages/dropple";
import DriverComp from "./components/pages/driver";
import AboutComp from "./components/pages/about";
import LoginComp from "./components/pages/login";
import ErrorComp from "./components/pages/error";

import Address from "./components/pages/Address";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route path="/" index element={<HomeComp />}></Route>
          <Route path="/dropple" element={<DroppleComp />}></Route>
          <Route path="/driver" element={<DriverComp />}></Route>
          <Route path="/about" element={<AboutComp />}></Route>
          <Route path="/login" element={<LoginComp />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="*" element={<ErrorComp />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
