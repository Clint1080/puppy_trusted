import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import "./animals.scss";

// Child Components
import AddAnimal from "../add_animal/AddAnimal";

const Animals = ({ kennelId, baseURL }) => {
  // Setting animals state by current state of kennelId
  const [animals, setAnimals] = useState([]);

  // Setting the kennel name as state
  const [kennelName, setKennelName] = useState("");

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
  }, [kennelId]);

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
      </ul>
    );
  });

  return (
    <section className="animals">
      <div className="all_animals container">
        <h2>{kennelName}</h2>
        {showAnimals}
      </div>
      <AddAnimal baseURL={baseURL} kennelId={kennelId} />
    </section>
  );
};

export default Animals;
