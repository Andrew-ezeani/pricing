import React from "react";
import "../styles/components/toggle.scss";

const Toggle = () => {
  return (
    <label htmlFor="toggle" className="toggle-box pric">
      Monthly
      <input type="checkbox" className="checkbox" />
    </label>
  );
};

export default Toggle;
