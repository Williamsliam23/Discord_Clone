import regeneratorRuntime from "regenerator-runtime";

// export const fetchMessages = () => (
//   $.ajax({
//     method: "GET",
//     url: "api/messages"
//   })
// )
export const fetchMessage = (id) => (
  $.ajax({
    method: "GET",
    url: `api/messages/${id}`
  })
)
// export const createMessage = (message) => {
//   console.log(message)
//   return $.ajax({
//     method: "POST",
//     url: `api/messages`,
//     data: message
//   })
// }
export const updateMessage = (message) => (
  $.ajax({
    method: "PATCH",
    url: `api/messages/${message.id}`,
    data: {message: message}
  })
)
export const deleteMessage = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/messages/${id}`
  })
)
export const fetchChannelMessages = async (channelId) => {
  if (!channelId) {
    return []
  }
    const messages = await $.ajax({
      method: "GET",
      url: `api/channels/${channelId}/messages`
    })
    return Object.values(messages)
    
}
export const createChannelMessage = (message) => {
  console.log(message)
  return $.ajax({
    method: "POST",
    url: `api/channels/${message.channelId}/messages`,
    data: {message: message}
  })
}
