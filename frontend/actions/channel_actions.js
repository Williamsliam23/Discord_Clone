import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
})
export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
})
export const removeChannels = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
})

export const fetchServerChannels = (serverId) => dispatch => (
  APIUtil.fetchServerChannels(serverId).then(channels => dispatch(receiveChannels(channels)))
)

export const fetchChannel = id => dispatch => (
  APIUtil.fetchChannel(id).then(channel => dispatch(receiveChannel(channel)))
)

export const createChannel = channel => dispatch => (
  APIUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)))
)

export const updateChannel = channel => dispatch => (
  APIUtil.updateChannel(channel).then(channel => dispatch(receiveChannel(channel)))
)

export const deleteChannel = id => dispatch => (
  APIUtil.deleteChannel(id).then(id => dispatch(removeChannel(id)))
)