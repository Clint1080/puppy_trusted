import React, { useState } from "react";
import axios from "axios";
import Button from "../button/Button";
import "./add_animal.scss";

const AddAnimal = ({
  baseURL,
  kennelId,
  setDebouncedAnimals,
  closeAddAnimalModal,
  showAddAnimalModal,
}) => {
  // Setting states
  const [animalName, setAnimalName] = useState("");
  const [gender, setGender] = useState("");
  const [microchip, setMicrochip] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [markings, setMarkings] = useState("");
  const [birthWeight, setBirthWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/animals", {
      animalName,
      kennelId,
      gender,
      microchip,
      birthDate,
      markings,
      birthWeight,
    });
    setAnimalName("");
    setGender("");
    setMicrochip("");
    setBirthDate("");
    setMarkings("");
    setBirthWeight("");

    // Sadly this is the only way I figured to update state to rerender my animals without creating a loop
    setTimeout(() => {
      setDebouncedAnimals(Math.random());
    }, 100);
  };

  if (!showAddAnimalModal) {
    return null;
  }

  return (
    <div className="add_animal">
      <form action="" onSubmit={handleSubmit}>
        <h2>Add a new dog</h2>
        <label htmlFor="animalName">Dog name</label>
        <input
          id="animalName"
          type="text"
          value={animalName}
          onChange={(e) => {
            setAnimalName(e.target.value);
          }}
        />

        <label htmlFor="gender">Gender M or F</label>
        <input
          id="gender"
          type="text"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />

        <label htmlFor="microchip">Microchip number</label>
        <input
          type="text"
          id="microchip"
          value={microchip}
          onChange={(e) => {
            setMicrochip(e.target.value);
          }}
        />

        <label htmlFor="birthdate">Birth Date</label>
        <input
          type="text"
          id="birthdate"
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
          }}
        />

        <label htmlFor="markings">Any specific markings</label>
        <input
          type="text"
          id="markings"
          value={markings}
          onChange={(e) => {
            setMarkings(e.target.value);
          }}
        />

        <label htmlFor="weight">Birth weight</label>
        <input
          type="text"
          id="weight"
          value={birthWeight}
          onChange={(e) => {
            setBirthWeight(e.target.value);
          }}
        />
        <div className="buttons">
          <Button type="click" text="cancel" click={closeAddAnimalModal} />
          <Button type="Submit" text="Save" />
        </div>
      </form>
    </div>
  );
};

export default AddAnimal;
