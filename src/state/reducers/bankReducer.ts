import { Action } from "../actions"
import { ActionType } from "../actions/action-types"

const initialState = { value: 0 }

export function bankReducer(state: typeof initialState = initialState, action: Action) {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return {
        ...state,
        value: state.value + action.payload
      }
    case ActionType.WITHDRAW:
      return {
        ...state,
        value: state.value - action.payload
      }
    case ActionType.BANKRUPT:
      return {
        ...state,
        value: 0
      }
    default:
      return state
  }
}
 