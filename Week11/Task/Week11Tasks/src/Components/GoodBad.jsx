import React, { useState } from "react";
import "./GoodBad.css";
export default function GoodBad() {
  const [good, setGood] = useState([]);
  const [bad, setBad] = useState([]);

  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;

    if (category === "good") {
      setGood([...good, name]);
    } else if (category === "bad") {
      setBad([...bad, name]);
    }
  };
  return (
    <div className="body">
      <div className="friend">
        <input type="text" id="name" placeholder="Enter Name" />
        <select id="category">
          <option value="good">Good</option>
          <option value="bad">Bad</option>
        </select>
        <br />
      </div>
      <button style={{ marginTop: "15px" }} onClick={handleSubmit}>
        Enter
      </button>
      <div className="container">
        <div className="good">
          <h3>Good</h3>
          <div className="listGood">
            {good.map((name, index) => (
              <div key={index}>{name}</div>
            ))}
          </div>
        </div>
        <div className="bad">
          <h3>Bad</h3>
          <div className="listBad">
            {bad.map((name, index) => (
              <div key={index}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
