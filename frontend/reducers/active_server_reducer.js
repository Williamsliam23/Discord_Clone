import { RECEIVE_SERVER } from "../actions/server_actions";

const activeServerReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({})

  switch (action.type) {
    case RECEIVE_SERVER:
      nextState = action.server
      return nextState
    default:
      return state;
  }
}

export default activeServerReducer