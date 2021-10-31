import React from "react";
import "./button.scss";

const Button = ({ text, type, click, className }) => {
  return (
    <button onClick={click} type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
