import React, { useState } from "react";
import LandingNav from "./LandingNav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";
import Adduser from "../adduser/Adduser";
import Admin from "../admin/Admin";
import Userlist from "../userlist/UserList";


function Landing() {
  

    return (
        <Router>
            <>
                <Routes>
                <Route path="/" exact element={<LandingNav/>} />
                <Route path="/adminlogin" exact element={<Adminlogin/>} />
                <Route path="/adduser" exact element={<Adduser/>} /> 
                <Route path="/admin"  exact element={<Admin/>}/>
                <Route path="/userlist" exact element={<Userlist/>}/>

                </Routes>
            </>
        </Router>
    )
}

export default Landing;