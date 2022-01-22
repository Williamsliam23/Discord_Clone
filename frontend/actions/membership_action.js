import * as APIUtil from "../util/membership_api_util"

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUsers = members => ({
  type: RECEIVE_USERS,
  members
})

export const receiveUser = member => ({
  type: RECEIVE_USER,
  member
})

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
)

export const createMembership = (membership) => dispatch => (
  APIUtil.createMembership(membership)//.then(users => dispatch(receiveUsers(users)))
)

