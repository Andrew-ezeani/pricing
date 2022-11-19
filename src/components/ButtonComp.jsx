import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/button.scss";
import "../styles/abstract/utility.scss";

const Button = ({ id, bg, path, text, name, isDisabled }) => {
  const styles = {
    backgroundColor: !bg ? "#ff6c00" : "#fff",
    color: !bg ? "#fff" : "#ff6c00",
    border: "none",
  };

  const Button = () => {
    return (
      <button disabled={isDisabled} style={styles}>
        <Link to={path} className={`btn ${name}`} style={styles}>
          {text}
          {id && (
            <span style={{ color: !bg ? "#FFF" : "#FF6C00" }} className="img">
              &#62;
            </span>
          )}
        </Link>
      </button>
    );
  };

  return <Button />;
};

export default Button;
