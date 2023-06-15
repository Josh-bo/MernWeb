import { useState } from 'react'
import AllPages from './Components/AllPages'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <AllPages/>
   </>
  )
}

export default App
