// import React from 'react';
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { UseReducer } from '../app/UseReducer';
import { UseState } from '../app/UseState';
import { ClassState } from '../app/ClassState';

function StatePage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Practicando estados</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="App">
        <div className="App-section"><UseState name="Use State" /></div>
        <div className="App-section"><ClassState name="Class State" /></div>
        <div className="App-section"><UseReducer name="Use Reducer" /></div>
      </div>
    </>
  );
}

export { StatePage };
