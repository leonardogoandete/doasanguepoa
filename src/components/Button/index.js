import React from "react";
import './button.css'

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button
     class = "Sair" type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
