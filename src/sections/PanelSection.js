import React from "react";
import Panel from "../library/panels";

const PanelSection = () => {
  return (
    <div className="custom-container">
      <h5>PANELS</h5>
      <Panel variant="active" />
      <Panel variant="inactive" />
      <Panel variant="default" />
    </div>
  );
};

export default PanelSection;
