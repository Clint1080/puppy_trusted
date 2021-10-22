import React, { useState } from "react";
import axios from "axios";
import Button from "../button/Button";
import "./add_animal.scss";

const AddAnimal = (kennelId) => {
  // Setting states
  const [animalName, setAnimalName] = useState("");
  const [gender, setGender] = useState("");
  const [microchip, setMicrochip] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [markings, setMarkings] = useState("");
  const [birthWeight, setBirthWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/animal", { animalName, kennelId, gender, microchip, birthDate, markings, birthWeight });
  };

  return (
    <div className="container add_animal">
      <h2>Add a new animal</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="animalName">Dog name</label>
        <input
          id="animalName"
          type="text"
          onChange={(e) => {
            setTimeout(() => {
              setAnimalName(e.target.value);
            }, 500);
          }}
        />

        <label htmlFor="gender">Genger M or F</label>
        <input
          id="gender"
          type="text"
          onChange={(e) => {
            setTimeout(() => {
              setGender(e.target.value);
            }, 500);
          }}
        />

        <label htmlFor="microchip">Microchip number</label>
        <input
          type="text"
          id="microchip"
          onChange={(e) => {
            setTimeout(() => {
              setMicrochip(e.target.value);
            }, 500);
          }}
        />

        <label htmlFor="birthdate">Birth Date</label>
        <input
          type="text"
          id="birthdate"
          onChange={(e) => {
            setTimeout(() => {
              setBirthDate(e.target.value);
            }, 500);
          }}
        />

        <label htmlFor="markings">Any specific markings</label>
        <input
          type="text"
          id="markings"
          onChange={(e) => {
            setTimeout(() => {
              setMarkings(e.target.value);
            }, 500);
          }}
        />

        <label htmlFor="weight">Birth weight</label>
        <input
          type="text"
          id="weight"
          onChange={(e) => {
            setTimeout(() => {
              setBirthWeight(e.target.value);
            }, 500);
          }}
        />

        <Button type="Submit" text="Add Dog" />
      </form>
    </div>
  );
};

export default AddAnimal;
