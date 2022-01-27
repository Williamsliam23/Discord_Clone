import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
})
export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})
export const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId
})

export const fetchChannelMessages = (channelId) => dispatch => (
  APIUtil.fetchChannelMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
)

export const fetchMessage = id => dispatch => (
  APIUtil.fetchMessage(id).then(message => dispatch(receiveMessage(message)))
)

export const updateMessage = message => dispatch => (
  APIUtil.updateMessage(message)//.then(message => dispatch(receiveMessage(message)))
)

export const createMessage = message => dispatch => (
  APIUtil.createChannelMessage(message)//.then(message => {dispatch(receiveMessage(message))})
)

export const deleteMessage = message => dispatch => (
  APIUtil.deleteMessage(message)//.then(message => dispatch(removeMessage(message)))
)