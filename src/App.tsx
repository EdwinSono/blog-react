import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { UseReducer } from './app/UseReducer';
// import { UseState } from './app/UseState';
// import { ClassState } from './ClassState';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  </>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Practicando estados</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <div className="App">
    //     <div className="App-section"><UseState name="Use State" /></div>
    //     {/* <div className="App-section"><ClassState name="Class State" /></div> */}
    //     {/* <UseState name="Use State" /> */}
    //     <div className="App-section"><UseReducer name="Use Reducer" /></div>
    //   </div>
    // </>
  )
}

export default App
