import * as React from 'react';

interface Props {
  name: string;
}

export function NewCode(props: Props) {
  const [count, setCount] = React.useState<number>(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={updateCount}>Click me</button>
      <h1>
        <br /> {count}
      </h1>
    </div>
  );
}
