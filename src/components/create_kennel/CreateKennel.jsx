import React, { useState } from "react";
import axios from "axios";
import Button from "../button/Button";
import "./create_kennel.scss";

const CreateKennel = ({
  baseURL,
  showCreateKennelModal,
  setshowCreateKennelModal,
  debouncedKennels,
  setDebouncedKennels,
}) => {
  // Setting states
  const [kennelName, setKennelName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}/kennels`, { kennelName });
    setDebouncedKennels(!debouncedKennels);
    document.body.classList.remove("modal-open");
    setshowCreateKennelModal(false);
  };

  if (!showCreateKennelModal) {
    return null;
  }
  return (
    <div className="create_kennel">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="kennelName">Kennel Name</label>
        <input
          id="kennelName"
          type="text"
          value={kennelName}
          onChange={(e) => {
            setKennelName(e.target.value);
          }}
          autoComplete="off"
        />
        <div className="buttons">
          <Button
            type="button"
            text="cancel"
            click={() => {
              document.body.classList.remove("modal-open");
              setshowCreateKennelModal(false);
            }}
          />
          <Button type="Submit" text="Save" />
        </div>
      </form>
    </div>
  );
};

export default CreateKennel;
