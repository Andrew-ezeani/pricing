import React from "react";
import { useState } from "react";
import "../styles/components/form.scss";
import "../styles/abstract/utility.scss";
import Button from "./Button";
import ButtonComp from "./ButtonComp";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const initialFormData = { cardNumber: "", expiry: "", cvv: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [disable, setDisable] = useState(false);

  const [formError, setFormError] = useState({});
  // This function validates form input
  function validate(obj) {
    const errors = {};
    const validCard = new RegExp(
      "^(?:4[0-9]{16}(?:[0-9]{3})?|5[1-5][0-9]{16})$"
    );
    const validCvv = new RegExp("^[0-9]{3,4}$");
    if (!obj.cardNumber) {
      errors.cardNumber = "error";
    }

    if (!obj.expiry) {
      errors.expiry = "error";
    }

    if (!obj.cvv) {
      errors.cvv = "error";
    }

    return errors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    const errorData = validate(formData);
    setFormError(errorData);
    console.log(formError);
    console.log(formError);

    if (Object.keys(errorData).length === 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    setFormData(initialFormData);
    console.log(formData);
    navigate("/success");
  }

  return (
    <form className="form__group" onSubmit={handleSubmit}>
      <label htmlFor="cardNumber" className="form__label">
        Card Number
      </label>
      <input
        id="cardNumber"
        name="cardNumber"
        type="tel"
        pattern="[0-9\s]{16}"
        maxLength="16"
        placeholder="1234 6453 8744 8745"
        value={formData.cardNumber}
        onChange={handleChange}
        className="form__input"
        required
      />
      <span className={`helper-text ${formError.cardNumber}`}>
        Must be a 16 - digit number
      </span>

      <label htmlFor="expiry" className="form__label">
        Expiry Date
      </label>
      <input
        id="expiry"
        name="expiry"
        type="tel"
        pattern="\d\d/\d\d"
        maxLength="5"
        placeholder="09/12"
        value={formData.expiry}
        onChange={handleChange}
        className="form__input"
        required
      />
      <span className={`helper-text ${formError.expiry}`}>
        Format: month/year
      </span>

      <label htmlFor="cvc" className="form__label">
        CVV
      </label>
      <input
        id="cvv"
        name="cvv"
        type="tel"
        pattern="\d{3}"
        maxLength="3"
        placeholder="765"
        value={formData.cvv}
        onChange={handleChange}
        className="form__input"
        required
      />
      <span className={`helper-text ${formError.cvv}`}>
        CVV is the 3 - digit number behind your card
      </span>
      <Button
        text="Proceed to payment"
        name="m-top-xl"
        path="success"
        isDisabled={disable}
      />
    </form>
  );
};

export default Form;
