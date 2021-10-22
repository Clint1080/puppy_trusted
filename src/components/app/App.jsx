import React, { useState } from "react";
import axios from "axios";
import Kennel from "../kennel/Kennel";
import Header from "../header/Header";
import Login from "../login/Login";
import AddAnimal from "../add_animal/AddAnimal";

import "./app.scss";
import Animals from "../animals/Animals";

function App() {
  const baseURL = "http://localhost:3001";
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Kennel baseURL={baseURL} />
    </div>
  );
}

export default App;
