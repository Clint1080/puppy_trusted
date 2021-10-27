import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateKennel from "../create_kennel/CreateKennel";
import "./kennel.scss";
import Animals from "../animals/Animals";
import Button from "../button/Button";

// This is going to display all animals in a kennel
const Kennel = ({ baseURL }) => {
  // Getting all kennels for current user
  const [userKennels, setUserKennels] = useState([]);
  // Using kennel id as session for anything related to a kennel
  const [kennelId, setKennelId] = useState(1);

  // Get all kennels
  const getKennels = async () => {
    const res = await axios.get(`${baseURL}/kennels`);
    setUserKennels(res.data.rows);
  };

  useEffect(() => {
    getKennels();
  }, []);

  const showKennels = userKennels.map((kennel) => {
    return (
      <li key={kennel.kennel_id} className="kennel_card">
        <h3 className="kennel_name">{kennel.name}</h3>
        <Button
          click={() => setKennelId(kennel.kennel_id)}
          text="Select Kennel"
          type="button"
        />
      </li>
    );
  });

  return (
    <div className="kennel container">
      <h2>Your kennels</h2>
      <ul className="all_kennels">{showKennels}</ul>
      <CreateKennel baseURL={baseURL} />
      <Animals kennelId={kennelId} baseURL={baseURL} />
    </div>
  );
};

export default Kennel;
