import React from "react";
import "./button.css";
import { Button as ButtonBS } from "react-bootstrap";

const Button = (props) => {
  let disabledClass = props.disabled ? "disabled" : "";
  let size = props.size === "lg" ? "lg" : "sm";
  return (
    <ButtonBS size={size} {...props} className={`btn ${disabledClass}`}>
      {props.children}
    </ButtonBS>
  );
};

export default Button;
