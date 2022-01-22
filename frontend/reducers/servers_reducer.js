import { RECEIVE_SERVERS, RECEIVE_NEW_SERVER } from "../actions/server_actions";

const serversReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
      case RECEIVE_NEW_SERVER:
        nextState[action.server.id] = action.server
      return nextState;
    default:
      return state;
  }
}

export default serversReducer