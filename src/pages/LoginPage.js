import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../css/style-login.css";
import { FaTelegramPlane, FaSnapchatGhost, FaTwitch, FaTwitter } from "react-icons/fa";


function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email) {
        setEmailError('Type Your Email');
      } else {
        setEmailError('');
      }

      if (!password) {
        setPasswordError('Type Your Password');
      } else {
        setPasswordError('');
      }

      if (!emailError && !passwordError) {
        const formData = new URLSearchParams();
        formData.append("grant_type", "password");
        formData.append("username", email);
        formData.append("password", password);

        const requestOptions = {
          method: 'POST',
          url: 'https://moviesapi.ir/oauth/token',
          data: formData,
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        };

        const response = await axios(requestOptions);

        if (response.data && response.data.access_token) {
          localStorage.setItem('Access-Token', JSON.stringify(`Bearer ${response.data.access_token}`));
          localStorage.setItem('Refresh-Token', JSON.stringify(response.data.refresh_token));

          const userResponse = await axios.get('/api/user', {
            headers: {
              authorization: `Bearer ${response.data.access_token}`,
              "accept": "application/json"
            }
          });

          localStorage.setItem('User-Name', JSON.stringify(userResponse.data.name));

          navigate('/Home');
          window.location.reload();
        }
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container1">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h1 className="title">Login</h1>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                className='ContainerLogin-form-input'
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            {emailError && <div className='error-email-login'>{emailError}</div>}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                className='ContainerLogin-form-input'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            {passwordError && <div className='error-password-login'>{passwordError}</div>}
            <button className="btn transparent" type="submit">Login</button>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaTelegramPlane />
              </a>
              <a href="#" className="social-icon">
                <FaSnapchatGhost />
              </a>
              <a href="#" className="social-icon">
                <FaTwitch />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={() => { navigate("/signuppage") }} >
              Sign up
            </button>
            <p onClick={() => { navigate("/") }}>Bak to Home</p>

          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>

      </div>
    </div>
  );
}

export default LoginPage;