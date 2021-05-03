import React, { useState } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "openClass" : "closeClass"}>
      <button
        style={{
          color: isOpen ? "red" : "green",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "OPen" : "Hide"}
      </button>
      <button onClick={() => setIsOpen(true)}>True</button>
      <button onClick={() => setIsOpen(false)}>False</button>
      <button onClick={() => setIsOpen(Math.random() < 0.5 ? true : false)}>
        Random
      </button>

      {isOpen && <button>True</button>}
      {/* {isOpen ? <button>True</button> : null}
      {isOpen ? <button>True</button> : <button>False</button>} */}
    </div>
  );
};

export default Test;
