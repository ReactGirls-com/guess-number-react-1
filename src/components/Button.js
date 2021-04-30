import React from "react";

const Button = ({ text, id, type }) => {
  return (
    <button type={type} id={id}>
      {text}
    </button>
  );
};

export default Button;
