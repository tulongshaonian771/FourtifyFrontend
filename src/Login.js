import React, {useEffect, useState} from 'react';
import './assets/css/style.css';
// Import Google Fonts
import { Helmet } from 'react-helmet';
// Import Bootstrap CSS
import './assets/plugins/bootstrap/css/bootstrap.min.css';
// Import Fontawesome CSS
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
// Import Datatables CSS
import './assets/plugins/datatables/datatables.min.css';
// Import Main CSS
import './assets/css/style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import logo from './assets/img/Spotify-Logo-PNG3.png'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [storeUsername, setStoreUsername] = useState('');
    const [storePassword, setStorePassword] = useState('');

    useEffect(() => {
        // 在页面加载时检查 localStorage 是否已有用户名和密码
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername && storedPassword) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async () => {
        try {
            // Send login request to the backend
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                navigate('/main');
                // 登录成功后保存到本地存储
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

            } else {
                // Handle login error
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    return(
    <>
        {/* Main Wrapper */}
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img
                                className="img-fluid"
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Login</h1>
                                <p className="account-subtitle">Access to our dashboard</p>
                                {/* Form */}
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={handleLogin} className="btn btn-primary btn-block">Login</button>
                                    </div>
                                {/* /Form */}
                                <div className="login-or">
                                    <span className="or-line" />
                                    <span className="span-or">Group4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* /Main Wrapper */}
    </>
);

}
