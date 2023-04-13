import React, { useState } from 'react';
import TextField from './TextField';
import { Counter } from './Counter';
import { Counters } from './types';

function App() {
  // props
  // hooks
  // render props
  const [counter, setCounter] = useState<Counters>({ _counter: 0, _counter1: 0 });
  // const [counter1, setCounter] = useState<number>(0);

  const increaseCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerHTML;
    var calc: number | undefined = 0;
    if (!text.includes("counter1") && counter._counter != undefined) {
      calc = counter._counter + 1;
      setCounter({ ...counter, _counter: calc });
      /* setCounter((prev) => ({ ...prev, _counter: calc })); */ // THE SAME RESULT AS ABOVE BUT HERE WE USE ARROW FUNCTION. 'prev' contains previous values of object props
    }
    else {
      if (counter._counter1 != undefined) {
        calc = counter._counter1 + 1;
        setCounter({ ...counter, _counter1: calc });
      }
      // counter1[1](counter1[0] + 1);
    }
  }
  const decreaseCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerHTML;
    let calc: number | undefined = 0;
    if (!text.includes("counter1") && counter._counter != undefined && counter._counter != 0) {
      calc = counter._counter - 1;
      setCounter({ ...counter, _counter: calc });
    }
    else {
      if (counter._counter1 != 0 && counter._counter1 != undefined) {
        calc = counter._counter1 - 1;
        setCounter({ ...counter, _counter1: calc });
      }
      // if (counter1[0] != 0) {
      //   counter1[1](counter1[0] - 1);
      // }
    }
  }

  const showResults = () => {
    console.log(counter);
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
      <div>{counter._counter}</div>
      {/* <button onClick={() => setCounter(counter + 1)}>counter + 1</button> */}
      <button onClick={increaseCounter}>counter + 1</button>
      <button onClick={decreaseCounter}>counter - 1</button>

      <h4>Counter1</h4>
      <div>{counter._counter1}</div>
      <button onClick={increaseCounter}>counter1 + 1</button>
      <button onClick={decreaseCounter}>counter1 - 1</button>

      <button
        onClick={showResults}
        style={{
          display: 'block',
          marginTop: '10px'
        }}
      >
        Show results in Console
      </button>
    </div>
  );
}

export default App;
