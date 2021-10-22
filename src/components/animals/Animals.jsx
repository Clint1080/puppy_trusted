import React from "react";
import axios from "axios";

import "./animals.scss";

import AddAnimal from "../add_animal/AddAnimal";

const Animals = ({kennelId}) => {
  return (
    <div>
      <AddAnimal kennelId={kennelId}/>
    </div>
  );
};

export default Animals;
