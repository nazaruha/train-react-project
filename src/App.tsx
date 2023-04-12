import React, { useState } from 'react';
import TextField from './TextField';
import { Counter } from './Counter';

function App() {
  // props
  // hooks
  // render props
  const [counter, setCounter] = useState<number>(0);
  const counter1 = useState<number>(0);

  const increaseCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerHTML;
    if (!text.includes("counter1")) {
      setCounter(counter + 1);
    }
    else {
      counter1[1](counter1[0] + 1);
    }
  }
  const decreaseCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerHTML;

    if (!text.includes("counter1")) {
      if (counter != 0) {
        setCounter(counter - 1);
      }
    }
    else {
      if (counter1[0] != 0) {
        counter1[1](counter1[0] - 1);
      }
    }
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
      {/* <button onClick={() => setCounter(counter + 1)}>counter + 1</button> */}
      <button onClick={increaseCounter}>counter + 1</button>
      <button onClick={decreaseCounter}>counter - 1</button>

      <h4>Counter1</h4>
      <div>{counter1[0]}</div>
      <button onClick={increaseCounter}>counter1 + 1</button>
      <button onClick={decreaseCounter}>counter1 - 1</button>
    </div>
  );
}

export default App;
