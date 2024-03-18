import React, { useEffect, useState } from "react";
import './admin.css';
import { Link } from "react-router-dom";

function AdminPage() {


  return (
    <>
      <div className="bg_img2">
        <div className="container1">
          <Link to={'/'}> <div className="card">
            <h3 className="title">Home</h3>
            <img className="admin_img" src="../../../public/landing/bg1.jpg" alt="" />
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
          <Link to={'/Userlist'}><div className="card">
            <h3 className="title">Userlist</h3>
            <img className="admin_img" src="../../../public/landing/Adduser.png" alt="" />
            <div className="bar">
              <div className="emptybar" />
              <div className="filledbar" />
            </div>
          </div></Link>

        </div>

       

      </div>
    </>
  );
}

export default AdminPage;
