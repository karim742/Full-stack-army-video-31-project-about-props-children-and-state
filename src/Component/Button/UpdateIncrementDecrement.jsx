import React from 'react';

function UpdateIncrementDecrement({
  handleIncrement,
  handleDecrement,
  incrementVal,
  decrementVal,
}) {
  return (
    <>
      <div>
        <label htmlFor="decrement">
          Decrement
          <input
            type="number"
            id="decrement"
            value={decrementVal}
            onChange={handleDecrement}
          />
        </label>
        <label htmlFor="increment">
          Increment
          <input
            type="number"
            id="increment"
            value={incrementVal}
            onChange={handleIncrement}
          />
        </label>
      </div>
      <br />
    </>
  );
}

export default UpdateIncrementDecrement;
