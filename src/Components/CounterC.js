const CounterC = ({  add, sub, reset, counterA, counterB, counterC }) => {
  return (
    <div className="counter counter-b">
      <div className="heading">Counter-C</div>
      <div className="counter-a">
        <h3>Counter A </h3>
        <div className="btn">
          <button
            className="plus-btn"
            onClick={() => {
              add("A");
            }}
          >
            +
          </button>
          <p className="para">{counterA}</p>
          {/* style={counterA>=0? {color:'green'}: {color:'red'}} */}
          <button
            className="subtract-btn"
            onClick={() => {
              sub("A");
            }}
          >
            -
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            reset("A");
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
              add("B");
            }}
          >
            +
          </button>
          <p >{counterB}</p>
          {/* style={counterB>=0?{color:'green'}: {color:'red'}} */}
          <button
            className="subtract-btn"
            onClick={() => {
              sub("B");
            }}
          >
            -
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            reset("B");
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
              add("C");
            }}
          >
            +
          </button>
          <p >{counterC}</p>
          {/* style={counterC=0?{color:'green'}: {color:'red'}} */}
          <button
            className="subtract-btn"
            onClick={() => {
              sub("C");
            }}
          >
            -
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            reset("C");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterC;
