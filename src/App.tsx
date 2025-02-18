// import React from 'react'

import Clock from "./components/Clock"
import Todo from "./components/Todo"

const App = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-start'>
      <Todo/>
      <Clock/>
    </div>
  )
}

export default App