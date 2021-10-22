import React from "react";
import "./button.scss";

const Button = ({ text, type, click }) => {
  return (
    <button onClick={click} type={type}>
      {text}
    </button>
  );
};

export default Button;
