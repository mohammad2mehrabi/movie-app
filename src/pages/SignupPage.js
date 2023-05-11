import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/style-login.css"
import { FaTelegramPlane , FaSnapchatGhost , FaTwitch , FaTwitter } from "react-icons/fa";


function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/v1/register', {
                email,
                password,
                name,
            });

            console.log(response.data);

            if (response.data) {
                navigate('/LoginPage');
            }

        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <>
            <div className="container1">
                <div className="forms-container">
                    <div className="signin-signup">
                        
                        <form onSubmit={handleSubmit} className="sign-in-form">
                            <h1 className="title">Signup</h1>
                            <div className="input-field">
                            <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-field">
                            <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <label htmlFor="terms" >
                                <br></br>
                                <input type="checkbox" value="terms" className="me-2" />I agree to the terms and conditions
                            </label>


                            <button type="submit" className="btn transparent">Signup</button>
                            <p className="social-text">Or Sign in with social platforms</p>
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
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" onClick={() => { navigate("/LoginPage") }} >
                                Sign in
                            </button>
                            <p onClick={() => { navigate("/") }} className="social-text">Bak to Home</p>

                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignupPage;


