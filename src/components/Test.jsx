import React from 'react';

export default function Test() {
  const [state, setState] = React.useState(0);

  return (
    <>
      <h2>Test</h2>
      <h2>{state}</h2>
      <button onClick={() => setState(state + 1)}>Inc</button>
      <button onClick={() => setState(state - 1)}>Dec</button>
    </>
  );
}
