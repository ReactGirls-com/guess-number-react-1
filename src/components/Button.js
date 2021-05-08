import React from "react";

const Button = ({ text, id, type, onClick }) => {
  return (
    <button type={type} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
