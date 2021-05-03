import React, { useState, useEffect } from "react";

const HowToPlaySection = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/playSteps")
      .then((response) => response.json())
      .then((json) => setSteps(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mainSection">
      <h2>How to play</h2>
      <ul>
        {steps.map((step) => {
          return <li key={step.id}>{step.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default HowToPlaySection;
