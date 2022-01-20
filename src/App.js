import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Header, Invite, Hangout, Fandom, Reliable, Footer, Login, Register } from './components/index';

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
      <BrowserRouter>
        <div className="signing">
          <Routes>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;