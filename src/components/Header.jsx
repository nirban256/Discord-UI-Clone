import React, { useState } from "react";
import discordLogo from "../images/discord_logo.svg";
import leftHeading from "../images/left_bg_landing_header.svg";
import rightHeading from "../images/right_bg_landing_header.svg";
import { AiOutlineDownload, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menu = () => (
    <>
        <li>Download</li>
        <li>Nitro</li>
        <li>Safety</li>
        <li>Support</li>
        <li>Blog</li>
        <li>Careers</li>
    </>
)

const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="head_container">
            <header>
                <div className="logo">
                    <span><img src={discordLogo} alt="Discord-Logo" />Discord</span>
                </div>
                <div className="header_nav">
                    <Menu />
                </div>
                <button className="btn" type="submit"><a href="Login.jsx">Login</a></button>
                <div className="header_nav_mobile">
                    {toggle ? <AiOutlineClose color="#000" size={27} onClick={() => setToggle(false)} /> : <AiOutlineMenu color="#fff" size={27} onClick={() => setToggle(true)} />}
                    {toggle && (
                        <div className="menu scale-up-center">
                            <Menu />
                            <button type="submit">Login</button>
                        </div>
                    )}
                </div>
            </header>
            <main className="sub_container">
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community.Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <button type="submit"><AiOutlineDownload /> Download for Linux</button>
                <button type="submit"><link href="/" />Open Discord in your browser</button>

                <div className="images">
                    <img src={leftHeading} alt="left-heading-image" aria-hidden="true" className="image_1" />
                    <img src={rightHeading} alt="right-heading-image" aria-hidden="true" className="image_2" />
                </div>
            </main>
        </div>
    )
}

export default Header;