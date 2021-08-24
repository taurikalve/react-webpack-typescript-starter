import React from 'react';
import Test from 'components/Test';

export default function App() {
  const [state, setState] = React.useState('CLICK ME');

  return (
    <>
      <h1>Webpack</h1>
      <button onClick={() => setState('CLICKED')}>{state}</button>
      <Test />
    </>
  );
}
