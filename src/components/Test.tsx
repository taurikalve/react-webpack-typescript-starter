import React from 'react';
import './Test.style.scss';

export default function Test() {
  const [state, setState] = React.useState<number>(0);

  return (
    <>
      <h2>Test</h2>
      <div>
        <img src='static/laugh.jpg' height='auto' width='300' />
      </div>
      <h2>{state}</h2>
      <button onClick={() => setState(state + 1)}>Inc</button>
      <button onClick={() => setState(state - 1)}>Dec</button>
    </>
  );
}
