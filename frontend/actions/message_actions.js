import * as APIUtil from '../util/message_api_util'

export const RECIEVE_MESSAGES = "RECIEVE_MESSAGES"
export const RECIEVE_MESSAGE = "RECIEVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const recieveMessages = messages => ({
  type: RECIEVE_MESSAGES,
  messages
})
export const recieveMessage = message => ({
  type: RECIEVE_MESSAGE,
  message
})
export const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId
})

export const fetchMessages = () => dispatch => (
  APIUtil.fetchMessages().then(messages => dispatch(recieveMessages(messages)))
)

export const fetchMessage = id => dispatch => (
  APIUtil.fetchMessage(id).then(message => dispatch(recieveMessage(message)))
)

export const updateMessage = message => dispatch => (
  APIUtil.updateMessage(message).then(message => dispatch(updateMessage(message)))
)

export const createMessage = message => dispatch => (
  APIUtil.createMessage(message).then(message => dispatch(createMessage(message)))
)

export const deleteMessage = id => dispatch => (
  APIUtil.deleteMessage(id).then(message => dispatch(deleteMessage(message)))
)