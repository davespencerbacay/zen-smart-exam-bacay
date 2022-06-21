import React from "react";
import "./panel.css";

const Panel = (props) => {
  const variant =
    props.variant === "active"
      ? "active"
      : props.variant === "inactive"
      ? "inactive"
      : "default";

  return <div className={`panel ${variant}`}></div>;
};

Panel.defaultProps = {
  variant: "default",
};

export default Panel;
