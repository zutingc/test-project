import React, { useState, useEffect } from 'react';

const SimpleEffectComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect with a dependency array
  useEffect(() => {
    // This code runs after the component renders
    document.title = `Count: ${count}`;

    // Cleanup function (optional): This runs before the component is unmounted
    return () => {
      document.title = 'React App'; // Reset the title on unmount
    };
  }, [count]); // Dependency array: Runs the effect whenever 'count' changes

  return (
    <div>
      <h1>Simple Effect Component</h1>
      <p>Note the change in the document title whenever count changes!</p>
      <hr></hr>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default SimpleEffectComponent;