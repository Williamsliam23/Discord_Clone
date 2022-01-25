import regeneratorRuntime from "regenerator-runtime";

export const fetchMessage = (id) => (
  $.ajax({
    method: "GET",
    url: `api/messages/${id}`
  })
)

export const updateMessage = (message) => (
  $.ajax({
    method: "PATCH",
    url: `api/messages/${message.id}`,
    data: {message: message}
  })
)
export const deleteMessage = (message) => (
  $.ajax({
    method: "DELETE",
    url: `api/channels/${message.channel_id}/messages/${message.id}`
  })
)
export const fetchChannelMessages = async (channelId) => {
  if (!channelId) {
    return []
  }
  if (channelId === 0) {
    return []
  }
    const messages = await $.ajax({
      method: "GET",
      url: `api/channels/${channelId}/messages`
    })
    return Object.values(messages)
    
}
export const createChannelMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: `api/channels/${message.channelId}/messages`,
    data: {message: message}
  })
}
