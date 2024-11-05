import { useState } from 'react'
import Terminal from "./components/Terminal.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Terminal></Terminal>
    </>
  )
}

export default App
