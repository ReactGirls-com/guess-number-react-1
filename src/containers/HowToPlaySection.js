import React from "react";

const playSteps = [
  { id: 1, text: "Guess the secret number between 0 and 100." },
  { id: 2, text: "If you guess incorrect number, you will get a hint." },
  { id: 3, text: "If you guess correct number, you win!" },
];

const HowToPlaySection = () => {
  return (
    <div className="mainSection">
      <h2>How to play</h2>
      <ul>
        {playSteps.map((step) => {
          return <li>{step.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default HowToPlaySection;
