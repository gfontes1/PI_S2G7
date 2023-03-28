import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
      <button className="btnLogin">
        Login
      </button>
    </div>
    <main className="App">
      <h1>Hello World!</h1>
    </main>
    </>
  )
}

export default App
