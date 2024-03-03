import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './adminlogin.css'




function Adminloginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    const passwordRegex = password.length >= 6;

    if (!passwordRegex) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    const HOSTED_SERVER_URL = 'http://localhost:4000';

    try {
      const response = await axios.post(`${HOSTED_SERVER_URL}/login`, {
        email,
        password,
      });

      if (response.data.statusCode === 200) {
        console.log('Login successful');
        alert('Login Successful');
        localStorage.setItem('accessTocken', response.data.data);
        navigate("/Admin");
      } else {
        setEmailError('Login Failed !');
        setPasswordError('Login Failed !');
      }
    } catch (error) {
      console.error('Error during login:', error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg_img">
        <form>
          <h2 className="heading">Admin login</h2>
          <label htmlFor="email">Admin Name:</label>
          <input type="text" value={email} onChange={handleEmailChange} required="" />
          <p className="error-message">{emailError}</p>
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required="" />
          <p className="error-message">{passwordError}</p>
          <button className="but_admin" onClick={handleLogin} type="button">Login</button>
        </form>
      </div>
    </>
  )
}
export default Adminloginpage;