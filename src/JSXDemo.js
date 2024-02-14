// Import React (if not using Create React App where it's automatically available)
import React from 'react';

// JSX element with a basic tag
const basicElement = <h1>Hello, World!</h1>;

// JSX with JavaScript expressions
const name = "John";
const greeting = <p>Hello, {name}!</p>;

// JSX with attributes
const link = <a href="https://example.com">Visit Example</a>;

// JSX within a JavaScript function
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

// Conditional rendering in JSX
function UserGreeting() {
  return <p>Welcome back!</p>;
}

function GuestGreeting() {
  return <p>Please sign up.</p>;
}

function ConditionalGreeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

// Mapping array to JSX elements
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);
const myList = <ul>{listItems}</ul>;

// Styling in JSX
const styledElement = <div style={{ color: 'blue', fontSize: '16px' }}>Styled Text</div>;

// Event handling in JSX
function handleClick() {
  alert('Button clicked!');
}

const button = <button onClick={handleClick}>Click me</button>;

// JSX Fragments
function MyComponent() {

  return (
    <>
      <h2>Title</h2>
      <p>Content</p>
    </>
  );
}

// Putting it all together in a React component
function JSXDemo() {
  return (
    <div>
      {basicElement}
      {greeting}
      {link}
      <Greeting name="Alice" />
      <ConditionalGreeting isLoggedIn={true} />
      {myList}
      {styledElement}
      {button}
      <MyComponent />
    </div>
  );
}

// Export the component (if used in a separate file)
export default JSXDemo;