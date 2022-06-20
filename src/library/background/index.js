import React from "react";

const Background = (props) => {
  const variant =
    props.variant === "info"
      ? "info"
      : props.variant === "success"
      ? "success"
      : props.variant === "danger"
      ? "danger"
      : props.variant === "default"
      ? "default"
      : "";

  return (
    <div className={`background-container ${variant}`}>{props.children}</div>
  );
};

Background.defaultProps = {
  variant: "default",
};

export default Background;
