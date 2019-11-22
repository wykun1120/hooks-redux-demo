import React, { createContext, useReducer } from 'react'
import {reducer} from './reducer'

// 1. 默认 state
const defaultState = {
  color: 'blue'
}

// 2. 创建一个 context, 作用是让所有受包裹的组件都能够得到 state, dispatch
export const DataContext = createContext()

export const Color = props => {
  // 3. useReducer 创建出 state, dispatch, 将其放入 Provider 的 value 中
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  )
}