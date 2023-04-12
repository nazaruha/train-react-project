import React, { useState } from 'react';
import TextField from './TextField';
import { Counter } from './Counter';

function App() {
  // props
  // hooks
  // render props
  const [counter, setCounter] = useState<number>(0);
  const counter1 = useState<number>(0);

  if (counter < 0) {
    setCounter(0);
  }
  if (counter1[0] < 0) {
    counter1[1](0);
  }

  return (
    <div>
      {/* <TextField text='hello' person={{firstName: 'Nazarii', lastName: 'Fedun'}} obj={{f1: ''}}/> */}
      {/* <Counter>
        {(count, setCount) => (<div>{count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>)}
      </Counter> */}
      <h4>Counter</h4>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>counter + 1</button>
      <button onClick={() => setCounter(counter - 1)}>counter - 1</button>

      <h4>Counter1</h4>
      <div>{counter1[0]}</div>
      <button onClick={() => counter1[1](counter1[0] + 1)}>counter1 + 1</button>
      <button onClick={() => counter1[1](counter1[0] - 1)}>counter1 - 1</button>
    </div>
  );
}

export default App;
