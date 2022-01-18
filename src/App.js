import React from "react";
import './App.css';
import { Header, Invite, Hangout, Fandom, Reliable, Footer, Login } from './components/index';

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Invite />
        <Hangout />
        <Fandom />
        <Reliable />
        <Footer />
      </div>
      <div className="signing">
        <Login />
      </div>
    </>
  );
}

export default App;