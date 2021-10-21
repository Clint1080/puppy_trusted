import React from "react";
import Button from "../button/Button";
import "./add_animal.scss";

const handleSubmit = (e) => {
  e.preventDefault();
};

const AddAnimal = () => {
  return (
    <div className="container add_animal">
      <h2>Add a new animal</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="animalName">Dog name</label>
        <input id="animalName" type="text" />
        <label htmlFor="gender">Genger M or F</label>
        <input id="gender" type="text" />
        <label htmlFor="microchip">Microchip number</label>
        <input type="text" id="microchip" />
        <label htmlFor="birthdate">Birth Date</label>
        <input type="text" id="birthdate" />
        <label htmlFor="markings">Any specific markings</label>
        <input type="text" id="markings" />
        <label htmlFor="weight">Birth weight</label>
        <input type="text" id="weight" />
        <Button type="onSubmit" text="Add Dog" />
      </form>
    </div>
  );
};

export default AddAnimal;
