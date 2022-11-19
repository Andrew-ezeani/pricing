import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import "../styles/pages/checkoutpage.scss";
import "../styles/abstract/utility.scss";
import cardImg from "../assets/Component 4.png";

const CheckoutPage = () => {
  return (
    <div className="container m-bottom-large pos-r">
      <div className="textbox">
        <h1>Selected value: Standard monthly plan</h1>
        <p className="fp-m m-top-small">Price: $18</p>
      </div>
      <div className="col m-top-medium">
        <div className="cardbox">
          <img src={cardImg} alt="" />
          <p className="fp-m">Credit card/Debit card</p>
        </div>
        <Form />
      </div>
      <div className="textbox">
        <p className="fp-m m-top-medium">
          Your subscription will automatically renew every month. You will be
          charged 40 USD on each renewal until you cancel your subscription. If
          you cancel, previous charges will not be refunded, but you may
          continue to use the service until the end of the term you paid for.
        </p>
        <p className="fp-m m-top-small">
          By clicking the "Checkout" button above, you agree to our{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          and have read our{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <Link to="/">Home</Link>
    </div>
  );
};

export default CheckoutPage;
