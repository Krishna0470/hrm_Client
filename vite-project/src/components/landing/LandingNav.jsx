import React from "react";
import './landing.css';
import {Link} from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";

function LandingNav({displayData}) {
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
        <Link to={'/'}>Home</Link>
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
         <Link to={'/Adminlogin'}> <button className="but_adminlogin" >ADMIN LOGIN</button></Link>
        </li>
      </ul>
      <h1 className="logo">ORIGINAL</h1>
    </div>
  </nav>


   <div className="bg">

    <h1 className="head" >Mobile App Development</h1>
    <h2 className="head2" >making software for smartphones, tablets and digital assistants.</h2>
    <p className="head2" >Yet mobile application development might seem daunting. Once you ve selected the OS platform or </p>
    <p className="head2" >platforms, you need to overcome the limitations of mobile devices and usher your app all the way</p>
    <p className="head2"  >past the potential hurdles of distribution. Fortunately, by following a few basic guidelines and </p>
    <p  className="head2" >best practices, you can streamline your application development journey.</p>
  </div>


  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
  />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  <title>Document</title>
  <div className="down">
    <div className="container">
    </div>
    <div className="container">
      <div className="row justify-content-center div5">
        <div className="col-lg">
          <h5 className="p_1">
            <span id="Testimony">Testimony</span>
          </h5>
          <h1>Our satisfied customer says</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>
      </div>
    </div>
    <div className="container ">
      <div className="row justify-content-center mar_1">
        <div className="col-sm-2">
          <a className="atag" href="">
            {" "}
            <span className="bi bi-microsoft">Microsoft</span>
          </a>
        </div>
        <div className="col-sm-2">
          <a className="atag" href="">
            <span className="bi bi-android2">Android</span>
          </a>
        </div>
        <div className="col-sm-2">
          <a className="atag" href="">
            <span className="bi bi-google">Google</span>
          </a>
        </div>
        <div className="col-sm-2">
          <a className="atag" href="">
            <span className="bi bi-microsoft">Microsoft</span>
          </a>
        </div>
        <div className="col-sm-2">
          <a className="atag" href="">
            <span className="bi bi-android2">Android</span>
          </a>
        </div>
      </div>
    </div>
    <div className="container-fluid ">
      <div className="row justify-content-center   div_8">
        <div className="col-lg-6 col-md">
          <h4>Subcribe to our Newsletter</h4>
          <p>Get e-mail updates about our latest shops and special offers</p>
        </div>
        <div className="col-lg-4 col-md">
          <form className="Subscribe-form d-flex">
            <input className="form-control "type="text"placeholder="Enter email address"/>
            <button className=" px-3" type="submit" value="Subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="container ">
      <div className="row div_11">
        <div className="col-md-3">
          <h4>Mobile App</h4>
          <ul type="none">
            <li>
              {" "}
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </li>
            <li>
              <a className="atag" href="">
                <span className="bi bi-twitter ico_1" />
              </a>
              <a className="atag" href="">
                <span className="bi bi-facebook ico_1" />
              </a>
              <a className="atag" href="">
                <span className="bi bi-instagram ico_1" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 justify-content-start ">
          <h4>Menu</h4>
          <ul type="none">
            <li>
              <p>
                <a className="atag" href="">Shop</a>
              </p>
            </li>
            <li>
              <p>
                <a className="atag" href="">About</a>
              </p>
            </li>
            <li>
              <p>
                <a className="atag" href="">Journal</a>
              </p>
            </li>
            <li>
              <p>
                <a className="atag" href="">Contact Us</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Help</h4>
          <ul type="none">
            <li>
              <p>
                <a className="atag" href="">Shipping Information</a>
              </p>
            </li>
            <li>
              {" "}
              <p>
                <a className="atag" href="">Returns &amp; Exchange</a>
              </p>
            </li>
            <li>
              <p>
                <a className="atag" href="">Terms &amp; Conditions</a>
              </p>
            </li>
            <li>
              <p>
                <a className="atag" href="">Privacy Policy</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Have a Questions?</h4>
          <ul type="none">
            <li>
              <span className="bi bi-geo-alt-fill">
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li>
              <a className="atag" href="">
                <span className="bi bi-telephone-fill">+91 974957595</span>
              </a>
            </li>
            <li>
              {" "}
              <a className="atag" href="">
                <span className="bi bi-envelope-fill">
                  {" "}
                  info@yourdomain.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row div5_1">
        <div className="col-lg-12 col-md">
          <p>
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <a className="atag" href="">
              <span className="bi bi-heart-fill">by</span>{" "}
              <span style={{ color: "yellowgreen" }}>Krishna</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>


        </>
    )
}

export default LandingNav;