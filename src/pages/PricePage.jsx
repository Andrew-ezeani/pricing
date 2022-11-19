import React from "react";
import PriceCard from "../components/PriceCard";
import Toggle from "../components/Toggle";
import "../styles/pages/price.scss";
import "../styles/abstract/utility.scss";

const PricePage = () => {
  return (
    <section className="price">
      <div className="price__textbox">
        <h1 className="price__title fp-xl">
          We’ve got a strategical plan that works best for you
          <span>Plan begins with 14 day trial on first subscription</span>
        </h1>
        <div className="sub-textbox">
          <p className="price__sub-text fp-m">
            100% cashback guarantee
            <span>
              Change your mind? We’ll refund your payment within one week of
              purchase
            </span>
          </p>
        </div>
        <Toggle />
      </div>
      <PriceCard />
    </section>
  );
};

export default PricePage;
