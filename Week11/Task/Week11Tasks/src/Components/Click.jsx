import React, { useState } from "react";

function Click() {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="card">
        <h1>Count is {count}</h1>
        <div className="btn" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={counter}>Count</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Click;
