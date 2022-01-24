// export const fetchChannels = () => (
//   $.ajax({
//     method: "GET",
//     url: "api/channels"
//   })
// )
import regeneratorRuntime from "regenerator-runtime";

export const fetchServerChannels = async (serverId) => {
  if(!serverId) {
    return []
  }
  const channels = await $.ajax({
    method: "GET",
    url: `api/servers/${serverId}/channels`
  })
  return Object.values(channels)
}

export const fetchChannel = async (id) => {
  if(!id){return {}}
  return $.ajax({
    method: "GET",
    url: `api/channels/${id}`
  })
}

export const createChannel = (channel) => {
  return $.ajax({
    method: "POST",
    url: `api/channels`,
    data: {channel: channel}
  })
}

export const updateChannel = (channel) => (
  $.ajax({
    method: "PATCH",
    url: `api/channels${channel.id}`,
    data: {channel: channel}
  })
)

export const deleteChannel = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/channels/${id}`
  })
)