import React from 'react';
import TextField from './TextField';
import { Counter } from './Counter';

function App() {
  // props
  // hooks
  // render props

  return (
    <div>
      {/* <TextField text='hello' person={{firstName: 'Nazarii', lastName: 'Fedun'}} obj={{f1: ''}}/> */}
      <Counter>
        {(count, setCount) => (<div>{count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>)}
      </Counter>
    </div>
  );
}

export default App;
