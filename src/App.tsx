import React, { useState } from 'react';
import TextField from './TextField';
import { Counter } from './Counter';

function App() {
  // props
  // hooks
  // render props
  const [counter, setCounter] = useState<number>(0);

  if (counter < 0) {
    setCounter(0);
  }

  return (
    <div>
      {/* <TextField text='hello' person={{firstName: 'Nazarii', lastName: 'Fedun'}} obj={{f1: ''}}/> */}
      {/* <Counter>
        {(count, setCount) => (<div>{count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>)}
      </Counter> */}
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>counter + 1</button>
      <button onClick={() => setCounter(counter - 1)}>counter - 1</button>
    </div>
  );
}

export default App;
