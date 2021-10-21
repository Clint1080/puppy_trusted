import React, { createFactory } from "react";
import CreateKennel from "../create_kennel/CreateKennel";
import Header from "../header/Header";
import Login from "../login/Login";
import AddAnimal from "../add_animal/AddAnimal";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <CreateKennel />
      <AddAnimal />
    </div>
  );
}

export default App;
