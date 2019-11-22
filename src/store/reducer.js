
import { UPDATE_COLOR } from './constants'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return {color: action.color}
    default:
      return state
  }
}

