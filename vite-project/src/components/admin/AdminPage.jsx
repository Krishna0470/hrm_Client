import React from "react";
import './admin.css';
import {Link} from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";
import Landing from "../landing/Landing";

function AdminPage({displayData}) {
    return (
        <>
 <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ORIGINAL</title>

  <>
  <div className="bg_img2">
  <Link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400"rel="stylesheet"/>
  <div className="container1">
  <Link to={'/'}> <div className="card">
      <h3 className="title">Home</h3>
      <img className="admin_img" src="../../../public/landing/bg1.jpg" alt="" />
      <div className="bar">
        <div className="emptybar" />
        <div className="filledbar" />
      </div>
    </div></Link>
    <Link to={'/Adminlogin'}><div className="card">
      <h3 className="title">AdminLogin</h3>
      <img className="admin_img" src="../../../public/landing/AdminLogin.png" alt="" />
      <div className="bar">
        <div className="emptybar" />
        <div className="filledbar" />
      </div>
    </div></Link> 
    <Link to={'/Adduser'}><div className="card">
      <h3 className="title">Add User</h3>
      <img className="admin_img" src="../../../public/landing/Adduser.png" alt="" />
      <div className="bar">
        <div className="emptybar" />
        <div className="filledbar" />
      </div>
    </div></Link> 
  </div>
  </div>
</>


        </>
    )
}

export default AdminPage;