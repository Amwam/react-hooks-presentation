import React from 'react';

export function NewCode(props) {
  const [count, setCount] = React.useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={updateCount}>Click me</button>
      <h1>
        New is:
        <br /> {count}
      </h1>
    </div>
  );
}
