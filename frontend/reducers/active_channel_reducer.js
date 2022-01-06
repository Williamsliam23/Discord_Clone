import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const activeChannelReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({})

  switch (action.type) {
    case RECEIVE_CHANNEL:
      nextState[action.channel.id] = action.channel
      return nextState
    default:
      return state;
  }
}

export default activeChannelReducer