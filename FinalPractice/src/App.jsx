import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count,setcount] = useState(0)

  const addParagraph = () => {
    setParagraphs([...paragraphs, { id: Date.now(), count: 1 }]);
  };

  const handleIncrement = (id) => {
    setParagraphs(
      paragraphs.map((para) =>
        para.id === id ? { ...para, count: para.count + 1 } : para
      )
    );
  };

  const handleDecrement = (id) => {
    setParagraphs(
      paragraphs.map((para) =>
        para.id === id && para.count > 0 ? { ...para, count: para.count - 1 } : para
      )
    );
  };

  const handleDelete = (id) => {
    setParagraphs(paragraphs.filter((para) => para.id !== id));
  };


  return (
   <div className="App">
      <button onClick={addParagraph}>Add Counter</button>
      <div>
        {paragraphs.map((para) => (
          <div key={para.id} className="paragraph">
            <button onClick={() => setcount(count+1)}>+</button>
            <button onClick={() => setcount(count-1)}>-</button>
            <span>{count}</span>
            <button onClick={() => handleDelete(para.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
