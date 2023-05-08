import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Routes, Route } from 'react-router-dom';
import TextField from './containers/pages/TextField';
import { Counters } from './containers/pages/types';
import DefaultLayout from './containers/default/defaultLayout';
import TutorialCounter from './containers/pages/TutorialCounter';
import MyCounter from './containers/pages/MyCounter';
import TutorialUseRef from './containers/pages/TutorialUseRef';
import TutorialUseEffect from './containers/pages/TutorialUseEffect';
import FirstUseEffectMistake from './containers/pages/TutorialUseEffect/useEffectMistakes/mistake-1';
import DefaultNotFound from './containers/default/defaultNotFound';
import DefaultHomePage from './containers/default/defaultHomePage';
import SecondUseEffectMistake from './containers/pages/TutorialUseEffect/useEffectMistakes/mistake-2';
import ThirdUseEffectMistake from './containers/pages/TutorialUseEffect/useEffectMistakes/mistake-3';
import Posts from './containers/pages/TutorialUseEffect/useEffectMistakes/mistake-3/Posts/posts';
import AxiosTrain from './containers/pages/AXIOS TRAIN';
import LoginPage from './containers/auth/login';
import setAuthToken from './containers/helpers/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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
          <Route index element={<DefaultHomePage />} />
          {/* useState ... */}
          <Route path="text-field" element={<TextField text='helloText' obj={{ f1: '' }} person={{ firstName: 'Nazarii', lastName: 'Fedun' }} />} />
          <Route path="tutorial-counter" element={<TutorialCounter>{(count, setCount) => (<div>{count}
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
          </div>)}</TutorialCounter>} />
          <Route path="my-counter" element={<MyCounter />} />
          {/* useRef */}
          <Route path="tutorial-useRef" element={<TutorialUseRef />} />
          {/* useEffect */}
          <Route path="tutorial-useEffect" element={<TutorialUseEffect />} />
          <Route path="tutorial-useEffect/:first-useEffect-mistake-DependencyMistake" element={<FirstUseEffectMistake />} />
          <Route path="tutorial-useEffect/:second-useEffect-mistake-IncorrectUpdateInUseEffect" element={<SecondUseEffectMistake />} />
          <Route path="tutorial-useEffect/:third-useEffect-mistake-ApiRequestsWithUseEffect" element={<ThirdUseEffectMistake />} />
          <Route path="tutorial-useEffect/:third-useEffect-mistake-ApiRequestsWithUseEffect/:posts" element={<Posts />} />
          {/* AXIOS */}
          <Route path="axios-train" element={<AxiosTrain />} />
          {/* Login / Register */}
          <Route path="login-page" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<DefaultNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
