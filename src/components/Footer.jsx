import React from "react";
import flag from "../images/flag.png"
import logo from "../images/discord_logo_white.svg";
import { FaChevronDown, FaTwitter, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="bottom">
                <div className="place">
                    <h4>Imagine a place</h4>
                    <p><img src={flag} alt="flag-image" aria-hidden="true" />English, USA<FaChevronDown color="#fff" /></p>
                    <div className="icons">
                        <li><FaTwitter size={24} /></li>
                        <li><FaInstagram size={24} /></li>
                        <li><FaFacebookSquare size={24} /></li>
                        <li><FaYoutube size={24} /></li>
                    </div>
                </div>
                <div className="product">
                    <li>Product</li>
                    <li>Download</li>
                    <li>Nitro</li>
                    <li>Status</li>
                </div>
                <div className="company">
                    <li>Company</li>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>Branding</li>
                    <li>Newsroom</li>
                </div>
                <div className="resources">
                    <li>Resources</li>
                    <li>Collage</li>
                    <li>Support</li>
                    <li>Safety</li>
                    <li>Blog</li>
                    <li>Feedback</li>
                    <li>Developers</li>
                    <li>StreanKit</li>
                </div>
                <div className="policy">
                    <li>Policies</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Guidelines</li>
                    <li>Acknowledgements</li>
                    <li>Licences</li>
                    <li>Moderation</li>
                </div>
            </div>
            <div className="line"></div>
            <div className="bottom_nav">
                <p><img src={logo} alt="discord logo" aria-hidden="true" />Discord</p>
                <button type="submit">Sign Up</button>
            </div>
        </div>
    )
}

export default Footer;