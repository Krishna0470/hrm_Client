import React, { useState } from "react";
import LandingNav from "./LandingNav";
// import Landingpage from "./Landingpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";
import Adduser from "../adduser/Adduser";
import Admin from "../admin/Admin";


function Landing() {
  

    return (
        <Router>
            <>
                <Routes>
                <Route path="/" exact element={<LandingNav/>} />
                {/* <Route path="/" exact element={<Landingpage/>} /> */}
                <Route path="/adminlogin" exact element={<Adminlogin/>} />
                <Route path="/adduser" exact element={<Adduser/>} />
                <Route path="/admin"  exact element={<Admin/>}/>
                </Routes>
            </>
        </Router>
    )
}

export default Landing;