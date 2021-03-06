import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import axios from "axios";
import "./EditAnimal.scss";

// Child components
import Button from "../button/Button";

const EditAnimal = ({
  showEditAnimalModal,
  editAnimalInfo,
  baseURL,
  closeEditModal,
  debouncedEditAnimals,
  setDebouncedAnimals,
}) => {
  const {
    animal_id,
    name,
    gender,
    microchip,
    birth_date,
    markings,
    birth_weight,
  } = editAnimalInfo;

  const [editAnimalName, setEditAnimalName] = useState(name);
  const [editGender, setEditGender] = useState(gender);
  const [editMicrochip, setEditMicrochip] = useState(microchip);
  const [editBirthDate, setEditBirthDate] = useState(birth_date);
  const [editMarkings, setEditMarkings] = useState(markings);
  const [editBirthWeight, setEditBirthWeight] = useState(birth_weight);

  // setEditAnimalName(name)
  const settingDefaultState = () => {
    setEditAnimalName(name);
    setEditGender(gender);
    setEditBirthDate(birth_date);
    setEditBirthWeight(birth_weight);
    setEditMicrochip(microchip);
    setEditMarkings(markings);
  };

  useEffect(() => {
    settingDefaultState();
  }, [debouncedEditAnimals]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${baseURL}/animals/${animal_id}`, {
      editAnimalName,
      editGender,
      editMicrochip,
      editBirthDate,
      editMarkings,
      editBirthWeight,
    });

    // This is so we can rerender all animals after we update
    setDebouncedAnimals(Math.random());
    closeEditModal();
  };

  if (!showEditAnimalModal) {
    return null;
  }

  return (
    <div className="edit_animal">
      <form action="" onSubmit={handleSubmit}>
        <h2>Edit {name}</h2>
        <label htmlFor="animalName">Dog name</label>
        <input
          id="animalName"
          type="text"
          placeholder={name}
          onChange={(e) => {
            setEditAnimalName(e.target.value);
          }}
          autoComplete="off"
        />
        <label htmlFor="gender">Gender M or F</label>
        <input
          id="gender"
          type="text"
          placeholder={gender}
          onChange={(e) => {
            setEditGender(e.target.value);
          }}
          autoComplete="off"
        />
        <label htmlFor="microchip">Microchip number</label>
        <input
          type="text"
          id="microchip"
          placeholder={microchip}
          onChange={(e) => {
            setEditMicrochip(e.target.value);
          }}
          autoComplete="off"
        />
        <label htmlFor="birthdate">Birth Date</label>
        <input
          type="date"
          id="birthdate"
          placeholder={birth_date}
          onChange={(e) => {
            setEditBirthDate(e.target.value);
          }}
          autoComplete="off"
        />
        <label htmlFor="markings">Any specific markings</label>
        <input
          type="text"
          id="markings"
          placeholder={markings}
          onChange={(e) => {
            setEditMarkings(e.target.value);
          }}
          autoComplete="off"
        />
        <label htmlFor="weight">Birth weight</label>
        <input
          type="text"
          id="weight"
          placeholder={birth_weight}
          onChange={(e) => {
            setEditBirthWeight(e.target.value);
          }}
          autoComplete="off"
        />
        <div className="buttons">
          <Button type="button" text="cancel" click={closeEditModal} />
          <Button type="Submit" text="Save" />
        </div>
      </form>
    </div>
  );
};

export default EditAnimal;
