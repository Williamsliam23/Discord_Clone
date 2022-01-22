export const fetchServers = async (user_id) => {
  if (user_id){
  const list = await $.ajax({
    method: "GET",
    url: "api/servers",
    data: {user_id: user_id}
  })
  return list}
  const noUser = await $.ajax({
    method: "GET",
    url: "api/servers"
  })
  return noUser
}

export const fetchServer = (id) => (
  $.ajax({
    method: "GET",
    url: `api/servers/${id}`
  })
)

export const createServer = async (server) => {

  const create = await $.ajax({
    method: "POST",
    url: `api/servers`,
    data: {server: server}
  })
  return create
}

export const updateServer = (server) => (
  $.ajax({
    method: "PATCH",
    url: `api/servers${server.id}`,
    data: {server: server}
  })
)

export const deleteServer = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/servers/${id}`
  })
)