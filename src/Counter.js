import React, { useState } from 'react';

const Counter = () => {
  // useState provides a variable and a setter function
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;