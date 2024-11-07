import React, { useState } from 'react';
import logo from '../Assests/logo.png'
import './login.css';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='full'>
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>BidBattle</h1>
      </div>
      <h2>Login</h2>
      <form>
        <label>Username/Email address</label>
        <input type="text" placeholder="Username/Email" />
        <label>Password</label>
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            👁️
          </span>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className='fs'>

      <a href="#" className="forgot-password">Forgot password?</a>
      <a href='#' className="sign-up">Sign Up</a>
      </div>
    </div>
    </div>
  )
}

export default Login;
