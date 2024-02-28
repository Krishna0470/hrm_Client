import React,{useState} from "react";
import axios from "axios";
import './adminlogin.css'




function Adminloginpage() {

  function handlelogin() {

    const HOSTED_SERVER_URL =urls()

    const response = axios.post(`$(HOSTED_SERVER_URL)/login`,values)
    
  }

    return (
<>
<meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
  <form >
    <h2 className="heading">Admin login</h2>
    <label htmlFor="email">Admin Name:</label>
    <input type="email" id="login_email" name="login_email"  required="" />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="login_password"
      name="login_password"
      required=""
    />
    <button   className="but_admin" onClick={handlelogin()}  type="button">SUBMIT </button>
  </form>
</>
    )

}
export default Adminloginpage;