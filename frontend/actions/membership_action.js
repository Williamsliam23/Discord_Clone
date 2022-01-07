import * as APIUtil from "../util/membership_api_util"

export const RECEIVE_USERS = "RECEIVE_USERS"

export const receiveUsers = members => ({
  type: RECEIVE_USERS,
  members
})

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
)