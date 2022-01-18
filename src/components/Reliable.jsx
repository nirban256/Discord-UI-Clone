import React from "react";
import chilling from "../images/just_chilling_landing.svg";
import { AiOutlineDownload } from "react-icons/ai";

const Reliable = () => {
    return (
        <div className="reliable">
            <div className="reliable_text">
                <h2>Reliable tech for staying close</h2>
                <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <img src={chilling} alt="chilling-image" aria-hidden="true" />
            <div className="reliable_text">
                <h3>Ready to start your journey?</h3>
                <button type="submit"><AiOutlineDownload />Download for Linux</button>
            </div>
        </div>
    )
}

export default Reliable;