import { useState } from "react";
import CounterB from "./CounterB";
const CounterA = () => {
  const [counterA, setcounterA] = useState(0);
  const [counterB, setcounterB] = useState(0);
  const [counterC, setcounterC] = useState(0);

  // Counter Add
  const Add = (val) => {
    if (val === "A") {
      setcounterA(counterA + 1);
    } else if (val === "B") {
      setcounterB(counterB + 1);
    } else if (val === "C") {
      setcounterC(counterC + 1);
    }
  };

  // Counter Subtract
  const Sub = (val) => {
    if (val === "A") {
      setcounterA(counterA - 1);
    } else if (val === "B") {
      setcounterB(counterB - 1);
    } else if (val === "C") {
      setcounterC(counterC - 1);
    }
  };

  // Counter Reset
  const Reset = (val) => {
    if (val === "A") {
      setcounterA(0);
    } else if (val === "B") {
      setcounterB(0);
    } else if (val === "C") {
      setcounterC(0);
    }
  };

  return (
    <div className="counter">
      <div className="heading">Counter-A</div>
      <div className="counter-a">
        <h3>Counter A </h3>
        <div className="btn">
          <button
            className="plus-btn"
            onClick={() => {
              Add("A");
            }}
          >
            +
          </button>
          <p  style={counterA>=0?{color:'green'}: {color:'red'}}>{counterA}</p>
         
          <button
            className="subtract-btn"
            onClick={() => {
              Sub("A");
            }}
          >
            -
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            Reset("A");
          }}
        >
          Reset
        </button>
      </div>
      <div className="counter-a">
        <h3>Counter B</h3>
        <div className="btn">
          <button
            className="plus-btn"
            onClick={() => {
              Add("B");
            }}
          >
            +
          </button>
          <p className="para">{counterB}</p>
          {/* style={counterB>=0?{color:'green'}: {color:'red'}} */}
          <button
            className="subtract-btn"
            onClick={() => {
              Sub("B");
            }}
          >
            -
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => { 
            Reset("B");
          }}
        >
          Reset
        </button>
      </div>
      <div className="counter-a">
        <h3>Counter C</h3>
        <div className="btn">
          <button
            className="plus-btn"
            onClick={() => {
              Add("C");
            }}
          >
            +
          </button>
          <p className="para">{counterC}</p>
          {/* style={counterC>=0?{color:'green'}: {color:'red'}} */}
          <button
            className="subtract-btn"
            onClick={() => {
              Sub("C");
            }}
          >
            -
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            Reset("C");
          }}
        >
          Reset
        </button>
      </div>
      <CounterB
        add={Add}
        sub={Sub}
        reset={Reset}
        counterA={counterA}
        counterB={counterB}
        counterC={counterC}
      />
    </div>
  );
};

export default CounterA;
