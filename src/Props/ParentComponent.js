import React from 'react';
import ChildComponent from './ChildComponent'; // Adjust the path

const ParentComponent = () => {
  const greeting = "Hello from Parent!";

  return (
    <div>
      <h1>{greeting}</h1>
      <ChildComponent greeting={greeting} />
    </div>
  );
};

export default ParentComponent;