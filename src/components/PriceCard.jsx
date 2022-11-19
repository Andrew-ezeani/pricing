import React from "react";
import "../Price data/priceData";
import priceData from "../Price data/priceData";
import "../styles/abstract/utility.scss";
import "../styles/abstract/variables.scss";
import "../styles/components/card.scss";
import Button from "./ButtonComp";

const price = priceData.map((price) => {
  const style = {
    color: price.id === 2 ? "#fff" : "#181616",
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div className="price__box fp-l" key={price.id}>
      <div className="price__heading" style={style}>
        <p className="price__package" style={style}>
          {price.package}
          <span
            className="underline"
            style={{ backgroundColor: price.id === 2 ? "#FFF" : "#ff6c00" }}
          ></span>
        </p>
        <span className="pric">{price.price}</span>
      </div>
      <ul className="price__features">
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info1}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info2}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info3}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info4}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info5}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info6}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info7}
        </li>
        <li className="price__feature__item fp-s" style={style}>
          <span>&#10050;</span>
          {price.info8}
        </li>
      </ul>

      <Button
        bg={price.id === 2 ? "orange" : ""}
        text="Choose plan"
        id={price.id}
        path="checkout"
        name="m-bottom-medium"
        handleClick={handleClick}
      />
    </div>
  );
});

const PriceCard = () => {
  return <article className="price__container">{price}</article>;
};

export default PriceCard;
