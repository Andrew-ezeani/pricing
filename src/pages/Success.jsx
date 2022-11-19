import React from "react";
import circle from "../assets/circle.png";
import checkmark from "../assets/checkmark.png";
import "../styles/components/modal.scss";
import "../styles/abstract/utility.scss";

const Success = () => {
  return (
    <div className="blur">
      <div className="modal">
        <h1 className="fp-l">Congratulations</h1>
        <div className="img-box">
          <img src={circle} alt="" className="circle" />
          <img src={checkmark} alt="" className="checkmark" />
        </div>
        <p className="message">
          You have successfully upgraded your plan. Your receipt has been sent
          to your email address.
        </p>
      </div>
    </div>
  );
};

export default Success;
