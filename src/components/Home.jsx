import React from "react";
import { Header, Invite, Hangout, Fandom, Reliable, Footer } from "./index";

const Home = () => {
    return (
        <div>
            <Header />
            <Invite />
            <Hangout />
            <Fandom />
            <Reliable />
            <Footer />
        </div>
    );
};

export default Home;
