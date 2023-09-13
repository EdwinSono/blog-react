import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
// import { UseState } from '../UseState';
import { UseReducer } from './UseReducer';
import { UseState } from './UseState';
// import { ClassState } from './ClassState';
import './App.css'

function App() {
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
        {/* <div className="App-section"><ClassState name="Class State" /></div> */}
        {/* <UseState name="Use State" /> */}
        <div className="App-section"><UseReducer name="Use Reducer" /></div>
      </div>
    </>
  )
}

export default App