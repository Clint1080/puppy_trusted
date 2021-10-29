import React, { useState } from "react";
import axios from "axios";
import Kennel from "../kennel/Kennel";
import Header from "../header/Header";
import Login from "../login/Login";
import Footer from "../footer/Footer";

import "./app.scss";
import Animals from "../animals/Animals";

function App() {
  const baseURL = "http://localhost:3001";
  return (
    <div className="App">
      <Header />
      <div className="main_wrapper">
        <Kennel baseURL={baseURL} />
      </div>
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
