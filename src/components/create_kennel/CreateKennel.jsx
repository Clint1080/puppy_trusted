import React, { useState } from "react";
import axios from "axios";
import Button from "../button/Button";
import "./create_kennel.scss";

const CreateKennel = () => {
  // Setting states
  const [kennelName, setKennelName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/kennel", { kennelName });
  };

  const onInputChange = (e) => {
    setTimeout(() => {
      setKennelName(e.target.value);
    }, 500);
  };

  return (
    <div className="container create_kennel">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="kennelName">Kennel Name</label>
        <input
          id="kennelName"
          type="text"
          // value={kennelName}
          onChange={onInputChange}
        />
        <Button type="submit" text="Add New Kennel" />
      </form>
    </div>
  );
};

export default CreateKennel;
