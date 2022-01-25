import * as APIUtil from "../util/server_api_util"

export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER"
export const RECEIVE_NEW_SERVER = "RECEIVE_NEW_SERVER"

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
})

export const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
})
export const removeServer = server => ({
  type: REMOVE_SERVER,
  server
})
export const receiveNewServer = server => ({
  type: RECEIVE_NEW_SERVER,
  server
})

export const fetchServers = (user_id=null) => dispatch => (
  APIUtil.fetchServers(user_id).then(servers => dispatch(receiveServers(servers)))
)
export const fetchServer = id => dispatch => (
  APIUtil.fetchServer(id).then(server => dispatch(receiveServer(server)))
)
export const createServer = server => dispatch => (
  APIUtil.createServer(server).then(server => dispatch(receiveNewServer(server)))
)
export const deleteServer = id => dispatch => (
  APIUtil.deleteServer(id).then(id => dispatch(removeServer(id)))
)