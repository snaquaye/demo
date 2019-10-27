import React from 'react';

const Counter = props => {
  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={props.increment}>
          +
        </button>

        <input value={props.initialValue} disabled />

        <button className="btn btn-primary" onClick={props.decriment}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
