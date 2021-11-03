import React, { useState } from "react";
import axios from "axios";
import Kennel from "../kennel/Kennel";
import Header from "../header/Header";
import Login from "../login/Login";
import Footer from "../footer/Footer";

import "./app.scss";

function App() {
  //

  const baseURL = "";
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Kennel baseURL={baseURL} />
      <Footer />
    </div>
  );
}

export default App;
