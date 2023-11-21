//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Routes from './routes/index'
import './App.css'
//import ScreenStudentClassSelection from './screens/Student/ClassSelection/index'
//import ScreenStudentFirstGrade1A from './screens/Student/ClassSelection/ClassesList/FirstGrade/1A/index'
//import ScreenStudentProfile from './screens/Student/Profile/index'
//import ScreenTeacherProfile from './screens/Teacher/Profile/index'
import ScreenAdmProfile from './screens/Adm/Profile/index'


function App() {

  return (
    <>

    <ScreenAdmProfile />
    
    
       {/*<Routes/> */} 


     {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  */}  </>
  )
}

export default App
