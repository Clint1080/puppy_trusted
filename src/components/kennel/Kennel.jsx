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
  const [debouncedKennels, setDebouncedKennels] = useState(false);
  // Using kennel id as session for anything related to a kennel
  const [kennelId, setKennelId] = useState(1);
  // This triggers the modal to create kennel
  const [showCreateKennelModal, setshowCreateKennelModal] = useState(false);

  // Get all kennels
  const getKennels = async () => {
    const res = await axios.get(`${baseURL}/kennels`);
    setUserKennels(res.data.rows);
  };

  useEffect(() => {
    getKennels();
  }, [debouncedKennels]);

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
    <main className="kennel container">
      <h2>My kennels</h2>
      <ul className="all_kennels">{showKennels}</ul>
      <Button
        type="button"
        className="create_kennel_button"
        text="Add A Kennel"
        click={() => {
          setshowCreateKennelModal(true);
        }}
      />
      <CreateKennel
        baseURL={baseURL}
        showCreateKennelModal={showCreateKennelModal}
        setshowCreateKennelModal={setshowCreateKennelModal}
        debouncedKennels={debouncedKennels}
        setDebouncedKennels={setDebouncedKennels}
      />
      <Animals kennelId={kennelId} baseURL={baseURL} />
    </main>
  );
};

export default Kennel;
