import React from 'react';

export function NewCode() {
  const [name, updateName] = React.useState(undefined);
  const [age, updateAge] = React.useState(undefined);

  function submit() {
    alert(`${name} is ${age}`);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          value={name}
          onChange={e => updateName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <br />
        <input id="age" value={age} onChange={e => updateAge(e.target.value)} />
      </div>
      <button type="submit" onClick={submit}>
        Submit
      </button>
      <div>
        Name: {name}. Age: {age}
      </div>
    </div>
  );
}
