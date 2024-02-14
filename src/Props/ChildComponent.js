import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.greeting}</p>
    </div>
  );
};

// Alternatively, you can directly pass the greeting

// const ChildComponent = ({greeting}) => {
//     return (
//       <div>
//         <p>{greeting}</p>
//       </div>
//     );
//   };

export default ChildComponent;