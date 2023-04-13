import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TextField from './TextField';
import { Counters } from './types';
import DefaultLayout from './containers/default/defaultLayout';
import TutorialCounter from './TutorialCounter';
import MyCounter from './MyCounter';

function App() {
  // props
  // hooks
  // render props


  return (
    <div>
      {/* <TextField text='hello' person={{firstName: 'Nazarii', lastName: 'Fedun'}} obj={{f1: ''}}/> */}
      {/* <Counter>
        {(count, setCount) => (<div>{count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>)}
      </Counter> */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="text-field" element={<TextField text='helloText' obj={{ f1: '' }} person={{ firstName: 'Nazarii', lastName: 'Fedun' }} />} />
          <Route path="tutorial-counter" element={<TutorialCounter>{(count, setCount) => (<div>{count}
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
          </div>)}</TutorialCounter>} />
          <Route path="my-counter" element={<MyCounter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
