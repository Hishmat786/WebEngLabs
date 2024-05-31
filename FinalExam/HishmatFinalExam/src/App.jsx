import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [counter, setcouter] = useState([]);

  const addcounter = () => {

    const counters=(
      <div className="counter" key={counter.length}>
        <button onClick={sub}>-</button>
        <p>{count}</p>
        <button onClick={add}>+</button>
        <button onClick={deletecounter(counter)}>Delete</button>
    </div>
    );
    setcouter([...counter, counters]);
  };

  const deletecounter = (index) => {
    let coutners = [...counter];
    coutners.splice(index, 1);
    setCount(counter);
  };
  function sub() {
    alert('msg');
    if (count>0) {
      setCount(count - 1);
    } else {
      alert("cannot less then 0");
    }
  }
  function add() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("count can not exede to 10");
    }
  }

  return (
    <>
      <Navbar />
      <div className="addcounter">
        <button onClick={addcounter}>Add Counter</button>
      </div>

      {counter}
      {/* <p>Counter 1</p>
      <div className="cout">
        <button onClick={sub}>-</button>
        <p>{count}</p>
        <button onClick={add}>+</button>
      </div> */}
      

      {/* <div className="counters">
        counter.map({(index, value) => {
          <div className="count">
            <button onClick={sub}>-</button>
            <p>{count}</p>
            <button onClick={add}>+</button>
            <button onClick={deletecounter(index)}>Delete</button>
          </div>;
        }}
        )
      </div> */}
      <Footer />
    </>
  );
}

export default App;
