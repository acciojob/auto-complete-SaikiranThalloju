
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  // const [flag, setFlag] = useState(false);

  function autoComplete() {
    const filteredFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredArray(filteredFruits);
    setFlag(true);
  }

  return (
    <div>
      {/* Do not remove the main div */}

      <input
        type="text"
        onInput={autoComplete}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
  <ul >
      {
        filteredArray.map((fruit, index) => (
        
            <li key={index}>{fruit}</li>
         
        ))}
         </ul>
    </div>
  );
};

export default App;
