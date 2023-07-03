import React from 'react';

function Button({ increment, decrement }) {
  return (
    <>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Button;
