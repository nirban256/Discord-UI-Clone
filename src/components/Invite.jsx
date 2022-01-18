import React from "react";
import Invite_page from "../images/invite_only_landing.svg";

const Invite = () => {
    return (
        <div className="invite">
            <img src={Invite_page} alt="invite-page-image" aria-hidden="true" />
            <div className="invite_text">
                <h2>Create an invite-only place where you belong</h2>
                <p>Discord servers are organised into topic-based channels where you can collaborate, share and just talk about your day without clogging up a group chat.</p>
            </div>
        </div>
    )
}

export default Invite;