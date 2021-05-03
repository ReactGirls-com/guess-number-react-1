import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import HowToPlaySection from "./containers/HowToPlaySection";
import SecretNumberSection from "./containers/SecretNumberSection";
import Test from "./Test";

const App = () => {
  const [value, setValue] = useState(null);

  const range = [0, 100];
  const [randomNumber, guessedValues] = React.useMemo(
    () => [getRandomNumber(range[0], range[1]), []],
    []
  );

  // funkce, která vytvoří náhodné číslo naší aplikace, které hádáme
  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  const welcomeMessage = "Welcome!";
  const winningMessage = "Gratulki! Uhadla si.";
  const tooSmallMessage = "Myslím na vyšší číslo.";
  const tooBigMessage = "Myslím na nižší číslo.";

  function handleGuess(e) {
    e.preventDefault();
    const guessedNumber = Number(value);
    guessedValues.push(guessedNumber);
    setValue("");
  }

  const lastGuessedNumber = guessedValues.length
    ? guessedValues[guessedValues.length - 1]
    : null;

  // zobrazeni message v zavislosti na tipovaném čísle - druhá varianta
  const messageSecond = () => {
    if (guessedValues.length === 0) {
      return welcomeMessage;
    } else if (lastGuessedNumber < randomNumber) {
      return tooSmallMessage;
    } else if (lastGuessedNumber > randomNumber) {
      return tooBigMessage;
    }
    return winningMessage;
  };

  return (
    <div className="App">
      <div className="alert">
        <p id="guessMessage">{messageSecond()}</p>
      </div>
      <Test />
      <header>
        <h1 id="headline">Can you guess the secret number?</h1>
      </header>
      <div className="main">
        <HowToPlaySection />
        <SecretNumberSection value={value} />
      </div>
      <div className="guessPanel">
        <form className="guessForm" onSubmit={handleGuess}>
          <h2>Number between 0 and 100:</h2>
          <input
            id="guessInput"
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            min="0"
            max="100"
          />
          <Button text="Guess" id="guessButton" type="submit" />
        </form>
        <div className="restartGame">
          <button type="submit" id="restartGameButton">
            Restart game
          </button>
          <Button text="Restart game" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default App;
