import React from "react";

const Button = ({ text, isActive, isDisabled, name }) => {
  console.log(isDisabled);
  const Button = () => {
    return (
      <button
        active={isActive}
        disabled={isDisabled}
        className={`btn ${name}`}
        style={{
          background: isDisabled ? "#d2d2d2" : "#ff6c00",
          color: isDisabled ? "#686868" : "#fff",
        }}
      >
        {text}
      </button>
    );
  };
  return <Button />;
};

export default Button;
