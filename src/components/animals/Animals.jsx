import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import "./animals.scss";

// Child Components
import AddAnimal from "../add_animal/AddAnimal";
import Button from "../button/Button";
import EditAnimal from "../edit_animal/EditAnimal";

const Animals = ({ kennelId, baseURL }) => {
  // Setting animals state by current state of kennelId
  const [animals, setAnimals] = useState([]);
  const [debouncedAnimals, setDebouncedAnimals] = useState(null);
  const [debouncedEditAnimals, setDebouncedEditAnimals] = useState(false);

  // This is how I am triggering the modal when edit is clicked
  const [showEditAnimalModal, setShowEditAnimalModal] = useState(false);

  // This is setting all animal info based on which animals edit button was clicked
  const [editAnimalInfo, setEditAnimalInfo] = useState({});

  // Setting the kennel name from kennel id as state
  const [kennelName, setKennelName] = useState("");

  // Getting all animals by KennelId
  const getAnimals = async () => {
    const res = await axios.get(`${baseURL}/animals/${kennelId}`);
    setAnimals(res.data.rows);
  };

  // Getting the name of name of the kennel by kennel_id
  const getKennelName = async () => {
    const kennelName = await axios.get(`${baseURL}/kennels/${kennelId}`);
    setKennelName(kennelName.data.rows[0].name);
  };

  useEffect(() => {
    getAnimals();
    getKennelName();
  }, [kennelId, debouncedAnimals]);

  const editAnimal = (
    animal_id,
    name,
    gender,
    birth_date,
    birth_weight,
    microchip,
    markings
  ) => {
    setShowEditAnimalModal(true);

    setEditAnimalInfo({
      animal_id,
      name,
      gender,
      birth_date,
      birth_weight,
      microchip,
      markings,
    });
  };

  // Sadly this is the only way I figured to update state to rerender my animals without creating a loop
  const deleteAnimal = (animalId) => {
    axios.delete(`${baseURL}/animals/${animalId}`);
    setTimeout(() => {
      setDebouncedAnimals(Math.random());
    }, 500);
  };

  const showAnimals = animals.map((animal) => {
    return (
      <ul key={animal.animal_id} className="animal_card">
        <li className="animal_name">
          <span>Name: </span>
          <span>{animal.name}</span>
        </li>
        <li className="gender">
          <span>Gender: </span>
          {animal.gender}
        </li>
        <li className="birth_date">
          <span>Birth Date: </span>
          {animal.birth_date}
        </li>
        <li className="birth_weight">
          <span>Birth Weight: </span>
          {animal.birth_weight}
        </li>
        <li className="microchip">
          <span>Microchip # </span>
          {animal.microchip}
        </li>
        <li className="markings">
          <span>Unique Markings: </span>
          {animal.markings}
        </li>
        <div className="button_container">
          <Button
            text="Edit"
            type="button"
            click={(e) => {
              e.preventDefault();
              setDebouncedEditAnimals(!debouncedEditAnimals);
              editAnimal(
                animal.animal_id,
                animal.name,
                animal.gender,
                animal.birth_date,
                animal.birth_weight,
                animal.microchip,
                animal.markings
              );
            }}
          />
          <Button
            text="Delete"
            type="button"
            click={(e) => {
              e.preventDefault();
              deleteAnimal(animal.animal_id);
            }}
          />
        </div>
      </ul>
    );
  });

  // Passing this function to edit animal modal to close the modal(cancel edit)
  const closeModal = () => {
    setShowEditAnimalModal(false);
  };

  return (
    <section className="animals">
      <h2>Kennel: {kennelName}</h2>
      <div className="all_animals container">{showAnimals}</div>
      <EditAnimal
        showEditAnimalModal={showEditAnimalModal}
        baseURL={baseURL}
        editAnimalInfo={editAnimalInfo}
        closeModal={closeModal}
        debouncedEditAnimals={debouncedEditAnimals}
        setDebouncedAnimals={setDebouncedAnimals}
      />
      <AddAnimal
        baseURL={baseURL}
        kennelId={kennelId}
        setDebouncedAnimals={setDebouncedAnimals}
      />
    </section>
  );
};

export default Animals;
