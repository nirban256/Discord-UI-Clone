import React from "react";
import { Link } from "react-router-dom";
import ComputerLogo from "../images/discord_logo.svg";
import QrCode from "../images/qr_code.png";

const Login = () => {
    return (
        <div className="login">
            <nav>
                <p><img src={ComputerLogo} alt="Discord-logo" />Discord</p>
            </nav>
            <div className="box">
                <div className="form">
                    <h2>Welcome back!</h2>
                    <p>We are so excited to see you again</p>
                    <label>Email</label><br />
                    <input type="email" id="email" /><br />
                    <label>Password</label><br />
                    <input type="password" id="password" /><br />
                    <a href="/">Forgot your password?</a>
                    <button type="submit" className="login-btn">Login</button>
                    <p>Need an account? <Link to="/register">Register</Link></p>
                </div>
                <div className="qr_code">
                    <img src={QrCode} alt="qr code" />
                    <h2>Log in with QR Code</h2>
                    <p>Scan this with the <span>Discord mobile app</span> to log in instantly</p>
                </div>
            </div>
        </div>
    )
}

export default Login;