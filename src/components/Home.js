import React, {useContext} from 'react'
import {DataContext} from '../store/state'
import {updateColor} from '../store/actionCreators'

const Home = () => {
  const {state, dispatch} = useContext(DataContext)
  return (
    <div id="Home">
      <p style={{color: state.color}}>color: {state.color}</p>
          <button onClick={() => {dispatch(updateColor('red'))}}>red</button>
          <button onClick={() => {dispatch(updateColor('blue'))}}>blue </button>
    </div>
  )
}

export default Home