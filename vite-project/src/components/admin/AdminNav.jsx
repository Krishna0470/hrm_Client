import React from "react";
import './admin.css';
import {Link} from "react-router-dom";

function AdminNav({displayData}) {
    return (
        <>
        <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ORIGINAL</title>
  <nav className="navbar">
    <div className="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Link to={'/Adduser'}><button  >ADD USER</button></Link>
        </li>
      </ul>
      <h1 className="logo">ORIGINAL</h1>
    </div>
  </nav>
        </>
    )
}

export default AdminNav;