import React from "react";
import hangoutLandingPage from "../images/hanging_out_easy_landing_page.svg";

const Hangout = () => {
    return (
        <div className="hangout">
            <div className="hangout_text">
                <h2>Where hanging out is easy</h2>
                <p>Grab a seat in the voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
            </div>
            <img src={hangoutLandingPage} alt="hangout-image" aria-hidden="true" />
        </div>
    )
}

export default Hangout;