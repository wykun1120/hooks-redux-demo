import React from 'react'
import {Color} from './store/state'
import Home from './components/Home'

const App = () => {
  return (
      <div>
        <Color>
          {/* 里面包含所有的子组件 */}
          <Home />
        </Color>
      </div>
  )
}

export default App