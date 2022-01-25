import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      nextState[action.channel.id] = action.channel
      return nextState;
    case REMOVE_CHANNEL:
      console.log(action)
      console.log(state)
      console.log(action.channel)
      console.log(action.channel["id"])
      debugger
      delete nextState[action.channel["id"]]
      return nextState
    default:
      return state;
  }
}

export default channelsReducer