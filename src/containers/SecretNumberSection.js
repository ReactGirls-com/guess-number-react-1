import React from "react";
import hvezda from "./../hvezda.svg";

const SecretNumberSection = ({ value }) => {
  return (
    <div className="mainSection">
      <h2>Secret Number</h2>
      <div className="secretNumber">
        <p className="symbol number rightAligned" id="minRange">
          0
        </p>
        <p className="symbol arrow">&lt;</p>
        <div className="star">
          <img src={hvezda} alt="hvezda" />
          <p className="symbol" id="mysteryNumber">
            {value}
          </p>
        </div>
        <p className="symbol arrow">&lt;</p>
        <p className="symbol number" id="maxRange">
          100
        </p>
      </div>
    </div>
  );
};

export default SecretNumberSection;
