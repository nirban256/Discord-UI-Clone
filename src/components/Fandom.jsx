import React from "react";
import fandomPage from "../images/fandom_landing.svg";

const Fandom = () => {
    return (
        <div className="fandom">
            <img src={fandomPage} alt="fandom-image" aria-hidden="true" />
            <div className="fandom_text">
                <h2>From few to a fandom</h2>
                <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </div>
    )
}

export default Fandom;