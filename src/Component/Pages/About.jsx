import React, { useState } from 'react';
import Button from '../../Component/Button/Button';
import UpdateIncrementDecrement from '../../Component/Button/UpdateIncrementDecrement';
import Layout from '../Layout/Layout';

function About() {
  let [count, setCount] = useState(0);
  const [incrementVal, setIncrementVal] = useState(5);
  const [decrementVal, setDecrementVal] = useState(5);
  function increment() {
    setCount(count + incrementVal);
  }
  function decrement() {
    setCount(count - decrementVal);
  }
  function handleDecrement(e) {
    setDecrementVal(parseInt(e.target.value));
  }
  function handleIncrement(e) {
    setIncrementVal(parseInt(e.target.value));
  }
  return (
    <>
      <Layout>
        <h1>COUNT: {count}</h1>
        <h1>This is a About Page</h1>
        <UpdateIncrementDecrement
          decrementVal={decrementVal}
          incrementVal={incrementVal}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <Button increment={increment} decrement={decrement} />
      </Layout>
    </>
  );
}

export default About;
