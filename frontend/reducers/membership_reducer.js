import { RECEIVE_USERS } from "../actions/membership_action";

const membershipReducer = (state={}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USERS:
      return action.members;
    default:
      return state;
  }
}

export default membershipReducer