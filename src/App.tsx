import React from 'react';
import Test from 'components/Test';

export default function App() {
  const [state, setState] = React.useState('CLICK ME');

  return (
    <>
      <div>
        <h1>Webpack</h1>
      </div>
      <button onClick={() => setState('CLICKED')}>{state}</button>
      <Test />
    </>
  );
}
