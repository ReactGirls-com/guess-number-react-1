import React from "react";
import Star from "../components/Star";

const SecretNumberSection = ({ value, minValue, maxValue }) => {
  return (
    <div className="mainSection">
      <h2>Secret Number</h2>
      <div className="secretNumber">
        <p className="symbol number rightAligned" id="minRange">
          {minValue}
        </p>
        <p className="symbol arrow">&lt;</p>
        <div className="star">
          <Star />
          <p className="symbol" id="mysteryNumber">
            {value}
          </p>
        </div>
        <p className="symbol arrow">&lt;</p>
        <p className="symbol number" id="maxRange">
          {maxValue}
        </p>
      </div>
    </div>
  );
};

export default SecretNumberSection;
