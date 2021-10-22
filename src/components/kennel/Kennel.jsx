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
  const [kennelId, setKennelId] = useState(0);

  const getKennels = async () => {
    const res = await axios.get(`${baseURL}/kennel`);
    setUserKennels(res.data.rows);
  };

  useEffect(() => {
    getKennels();
  }, []);

  const showKennels = userKennels.map((kennel) => {
    return (
      <li key={kennel.kennel_id} className="kennel">
        {kennel.name}
        <Button
          click={() => setKennelId(kennel.kennel_id)}
          text="Select Kennel"
          type="button"
        />
      </li>
    );
  });

  return (
    <div className="kennel">
      <ul>{showKennels}</ul>
      <CreateKennel />
      <ul className="allKennels"></ul>
      <Animals kennelId={kennelId} />
    </div>
  );
};

export default Kennel;
