import { RECEIVE_USERS, REMOVE_USER } from "../actions/membership_action";

const membershipReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_USERS:
      return action.members;
    default:
      return state;
  }
}

export default membershipReducer