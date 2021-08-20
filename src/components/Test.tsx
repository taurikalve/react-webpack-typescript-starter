import React from 'react';

export default function Test():JSX.Element {
  const [state, setState] = React.useState<number>(0);

  return (
    <>
      <h2>Test</h2>
      <h2>{state}</h2>
      <button onClick={() => setState(state + 1)}>Inc</button>
      <button onClick={() => setState(state - 1)}>Dec</button>
    </>
  );
}
