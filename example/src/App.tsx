import React from 'react'
import { Button } from 'your-lib-name'
import 'your-lib-name/style.css'

const App = () => {
  return (
    <div
      style={{
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        background: `black`
      }}
    >
      <Button>Hello</Button>
    </div>
  )
}

export default App
