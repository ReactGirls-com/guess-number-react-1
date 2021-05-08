import React, { useState, useMemo } from "react";
import "./App.css";
import Button from "./components/Button";
import HowToPlaySection from "./containers/HowToPlaySection";
import SecretNumberSection from "./containers/SecretNumberSection";
import Test from "./Test";
import Star from "./components/Star";

const RANGE = [0, 100];
// funkce, která vytvoří náhodné číslo naší aplikace, které hádáme
function getRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const welcomeMessage = "Welcome!";
const winningMessage = "Gratulki! Uhadla si.";
const tooSmallMessage = "Myslím na vyšší číslo.";
const tooBigMessage = "Myslím na nižší číslo.";

const App = () => {
  const [gameCount, setGameCount] = useState(1);
  const [value, setValue] = useState(null);
  const randomNumber = useMemo(() => getRandomNumber(RANGE[0], RANGE[1]), [
    gameCount,
  ]);
  const guessedValues = useMemo(() => [], [gameCount]);

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
  const getMessageSecond = () => {
    if (guessedValues.length === 0) {
      return welcomeMessage;
    } else if (lastGuessedNumber < randomNumber) {
      return tooSmallMessage;
    } else if (lastGuessedNumber > randomNumber) {
      return tooBigMessage;
    }
    return winningMessage;
  };
  const messageSecond = getMessageSecond();

  const smallerValues = guessedValues.filter((number) => number < randomNumber);
  const minValue =
    smallerValues.length > 0 ? Math.max(...smallerValues) : RANGE[0];

  const greaterValues = guessedValues.filter((number) => number > randomNumber);
  const maxValue = greaterValues.length ? Math.min(...greaterValues) : RANGE[1];

  const hasWon = messageSecond === winningMessage;

  return (
    <div className="App">
      <div className="alert">
        <p id="guessMessage">{messageSecond}</p>
      </div>
      <Test />
      <header>
        <h1 id="headline">Can you guess the secret number? {randomNumber}</h1>
      </header>
      <div className="main">
        <HowToPlaySection />
        {hasWon ? (
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#fff" }}>{messageSecond}</h1>
            <Star />
          </div>
        ) : (
          <SecretNumberSection
            value={value}
            minValue={minValue}
            maxValue={maxValue}
          />
        )}
      </div>
      <div className="guessPanel">
        {hasWon ? (
          <div className="restartGame">
            <Button
              text="Restart game"
              type="submit"
              onClick={(e) => {
                // RESTART GAME
                setGameCount(gameCount + 1);
              }}
            />
          </div>
        ) : (
          <form className="guessForm" onSubmit={handleGuess}>
            <h2>Number between 0 and 100:</h2>
            <input
              id="guessInput"
              type="number"
              value={value}
              onChange={(e) => {
                setValue(e.target.value); // zavolej App() again
              }}
              min="0"
              max="100"
            />
            <Button text="Guess" id="guessButton" type="submit" />
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
